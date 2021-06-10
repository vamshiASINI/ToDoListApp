import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { element } from 'protractor';
import { from, Subject } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { DialogService } from '../services/dialog.service';
import { AppConfig } from '../../appConfig';
import { tableSettingsObject } from '../globalObjects/tableSettingsObject'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  @Input('formData') formData;
  @Input('title') title;
  @Input('fields') fields;
  @Input('resourceUrl') resourceUrl;
  @Input('extraFields') extraFields;
  @Input('preFilter') preFilter;


  filteredOptions = [];
  autoCompleteModel = {};
  chipModel = {};
  extraFormData = {};
  extraChipField = {};
  isSubmitInProgress: boolean = false;
  searchTextChanged = new Subject<any>()
  isAutoCompleteLoading = {};
  pageSize = 10;
  offset = 0;
  subscription: any;
  searchDatadata: { value: any; field: any; type: any };
  flexCol: string;
  validFields = [];
  selectable = true;
  removable = true;

  constructor(private api: ApiService, public dialogService: DialogService, public tableSettingsObject: tableSettingsObject, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.calculateValidFields();
    this.setAutoCompleteData();
    this.flexCol = this.validFields ? this.validFields.length > 3 ? '0 1 calc(50% - 32px)' : '0 1 calc(100% - 32px)' : '0 1 calc(100% - 32px)';
    if (this.extraFields) {
      Object.keys(this.extraFields).forEach(el => {
        this.extraFormData[el] = {};
        this.extraChipField[el] = [];
      })
    }
    this.setDefaultValue();
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(search => this.autoComplete(this.searchDatadata))
    )
      .subscribe((data) => {
        this.isAutoCompleteLoading[this.searchDatadata.field.name] = false;
        this.filteredOptions = data.results;
        if (this.searchDatadata.type === 'chip') {
          this.removeSelectedChipFromResponse(this.searchDatadata.field.name)
        }
      });


  }

  calculateValidFields(type?) {
    this.validFields = [];
    if (this.fields) {
      this.fields.forEach(field => {
        if (!type && field.isConditionalCheck) {
          this.condtionalCheck(field.conditionalFormula, 'edit')
        }
        if (!field.isFormHidden) {
          this.validFields.push(field);
        }
      });
    }
  }

  setAutoCompleteData() {
    if (this.formData) {
      this.validFields.forEach(field => {
        if (field.type === 'autoComplete') {
          this.autoCompleteModel[field.name] = this.formData[field.name.replace('_id', '')]
        } else if (field.type === 'chip') {
          this.chipModel[field.name] = this.formData[field.name.replace('_id', '')]
        }
      })
    }
  }

  setDefaultValue() {
    console.log(this.fields)
    if (this.fields) {
      this.fields.forEach(field => {
        if (typeof field.defaultValue === 'boolean' && !this.formData.id) {
          this.formData[field.name] = field.defaultValue;
        }
      });
    }
  }

  search($event, field) {
    console.log(field)
    this.isAutoCompleteLoading[field.name] = true;
    this.searchDatadata = {
      value: $event.target.value,
      field: field,
      type: field.type
    }
    this.searchTextChanged.next(this.searchDatadata);
  }

  autoComplete({ value, field }) {
    // console.log(event.target.value)
    let queryParams = `&limit=${this.pageSize}&offset=${this.offset}&is_active=true`;
    if (field.dependsOn) {
      field.selected = false;
      queryParams += `&search=${value}&search_fields=${field.dataSourceValue}&${field.dependsOn + '__in'}=${this.formData[field.dependsOn]}`;
    } else {
      queryParams += `&search=${value}&search_fields=${field.dataSourceValue}`;
    }

    if (field.isPreFilter) {
      field.isPreFilter.forEach(element => {
        queryParams += `&${element.key}=${element.value}`
      });
    }

    if (this.preFilter) {
      this.preFilter.forEach(element => {
        queryParams += `&${element.key}=${element.value}`
      });
    }
    console.log(queryParams);
    if (field.dataSourceUrl) {
      return this.api.get(`${field.dataSourceUrl}?${queryParams}`)
    }
  }

  check(d) {
    console.log(d)
  }

  onAutoCompleteChange(form?, event?) {
    console.log(event)
    console.log(form)
    this.filteredOptions = [];
    if (event) {
      this.formData[form.name] = event.option.id;
      this.filteredOptions = [];
    } else {
      console.log(AppConfig.dataLimit);
      let queryParams = `&limit=${AppConfig.dataLimit}&offset=${this.offset}&is_active=true`;
      if (this.autoCompleteModel[form.name]) {
        queryParams += `&search=${this.autoCompleteModel[form.name]}&search_fields=${form.dataSourceValue}`;
      }
      if (form.dependsOn) {
        form.selected = false;
        queryParams += `&${form.dependsOn + '__in'}=${this.formData[form.dependsOn]}`;
        console.log(queryParams)
      }
      if (form.dataSourceUrl) {
        this.isAutoCompleteLoading[form.name] = true;
        this.api.get(`${form.dataSourceUrl}?${queryParams}`).subscribe(res => {
          this.filteredOptions = res.results;
          this.isAutoCompleteLoading[form.name] = false;
          console.log(this.filteredOptions)
        });
      }
    }

    if (form && form.isConditionalCheck) {
      console.log(form.conditionalFormula)
      console.log(this[form.conditionalFormula])
      this.condtionalCheck(form.conditionalFormula, 'add');
    }
  }

  addNew(field) {
    let tempFormData = { ...this.formData };
    tempFormData.name = this.autoCompleteModel[field.name];

    this.api.post(field.dataSourceUrl.split('?')[0], tempFormData).subscribe((res) => {
      if (res) {
        this.dialogService.openSnackBar(this._snackBar, 'Added successfully', 'Success');
        this.autoCompleteModel[field.name] = res.name;
        this.formData[field.name] = res.id;
        field.selected = true;
      }
    })

  }

  condtionalCheck(arr, type) {
    console.log(arr);
    console.log(type)
    if (arr) {
      if (arr[2] === 'hideShow') {
        this.fields.forEach(element => {
          if (element.name === arr[1]) {
            element.isFormHidden = this.formData[arr[0]] === arr[3] ? false : true;
            if (element.isFormHidden) {
              this.formData[arr[1]] = null;
              this.autoCompleteModel[arr[1]] = null;
            }
          }
        });
      } else if (arr[2] === 'disableEnable') {
        if (this.formData[arr[0]]) {
          this.fields.forEach(element => {
            if (element.name === arr[1]) {
              element.readonly = this.formData[arr[0]] ? false : true;
            }
          });
        }

      } else if (arr[2] === 'multiply') {
        let monthData = [{ id: 1, month: 12 }, { id: 3, month: 4 }, { id: 2, month: 6 }, { id: 5, month: 3 }]
        if (this.formData[arr[0]] && this.formData[arr[3]]) {
          let academicTerm = monthData.filter(el => el.id === this.formData[arr[0]]);
          this.formData[arr[1]] = Math.round((((Number(academicTerm[0].month) * Number(this.formData[arr[3]])) / 12) * 100)) / 100;
        } else {
          this.formData[arr[1]] = null;
        }
      }

      console.log(this.formData)
    }

    if (type === 'add') {
      this.calculateValidFields('add');
    }
  }

  autoCompleteAdd(event, field) {
    console.log(field)
    event.stopPropagation();
    console.log(this.tableSettingsObject[field.addObjectKey])
    this.dialogService.openDialog(this.tableSettingsObject[field.addObjectKey]).afterClosed().subscribe(res => {
      console.log(res);
      this.dialogService.dialogRef = null;
      if (res && res.type === 'success') {
        this.formData[field.name] = res.data.id;
        this.autoCompleteModel[field.name] = res.data.name
        this.dialogService.openSnackBar(this._snackBar, 'Added successfully', 'Success');
      } else if (res && res.type === 'error') {
        this.dialogService.openSnackBar(this._snackBar, res.data.error.name[0], 'Failed');
      }
    })
  }

  getChipList(field) {
    let queryParams = `&limit=${AppConfig.dataLimit}&offset=${this.offset}&is_active=true`;
    if (field.isPreFilter) {
      field.isPreFilter.forEach(element => {
        queryParams += `&${element.key}=${element.value}`
      });
    }
    if (this.preFilter) {
      this.preFilter.forEach(element => {
        queryParams += `&${element.key}=${element.value}`
      });
    }
    this.isAutoCompleteLoading[field.name] = true;
    console.log('hi')
    this.api.get(`${field.dataSourceUrl}?${queryParams}`).subscribe(res => {
      this.filteredOptions = res.results;
      this.removeSelectedChipFromResponse(field.name)
      this.isAutoCompleteLoading[field.name] = false;
    });
  }

  removeSelectedChipFromResponse(fieldName) {
    if (this.formData[fieldName]) {
      this.filteredOptions = this.filteredOptions.filter(el => {
        return !this.formData[fieldName].includes(el.id);
      })
    }
  }

  selected(event: MatAutocompleteSelectedEvent, fieldName): void {
    if (typeof this.chipModel[fieldName] === 'object') {
      this.chipModel[fieldName].push({ id: event.option.value, name: event.option.viewValue })
    } else {
      this.chipModel[fieldName] = [{ id: event.option.value, name: event.option.viewValue }];
    }
    this.formData[fieldName] = this.chipModel[fieldName].map(element => {
      return element.id
    });
    this.autoCompleteModel[fieldName] = undefined;
    console.log(this.autoCompleteModel)
  }

  removeChip(chip, fieldName) {
    this.chipModel[fieldName].forEach((element, index) => {
      if (element.id === chip.id) {
        this.chipModel[fieldName].splice(index, 1)
      }
    });
    this.formData[fieldName].splice(this.formData[fieldName].indexOf(chip.id), 1);
  }

  // selectExtraChipField(event: MatAutocompleteSelectedEvent, keyName, fieldName) {
  //   if (typeof this.extraChipField[keyName][fieldName] === 'object') {
  //     this.extraChipField[keyName][fieldName].push({ id: event.option.value, name: event.option.viewValue })
  //   } else {
  //     this.extraChipField[keyName][fieldName] = [{ id: event.option.value, name: event.option.viewValue }];
  //   }
  //   this.extraFormData[keyName][fieldName] = this.extraChipField[keyName][fieldName].map(element => {
  //     return element.id
  //   });
  //   console.log(this.extraFields[keyName][fieldName])
  // }

  // removeExtraFieldChip(chip, keyName, fieldName) {
  //   this.extraChipField[keyName][fieldName].forEach((element, index) => {
  //     if (element.id === chip.id) {
  //       this.extraChipField[keyName][fieldName].splice(index, 1)
  //     }
  //   });
  //   this.extraFormData[keyName][fieldName].splice(this.extraFormData[keyName][fieldName].indexOf(chip.id), 1);
  // }


  submitForm() {
    if (this.isSubmitInProgress) {
      return;
    }
    if (this.fields) {
      this.fields.forEach(field => {
        if (field.defaultValue) {
          if (typeof (this.formData[field.name]) === 'undefined' || this.formData[field.name] === null) {
            this.formData[field.name] = field.defaultValue;
          }
        }
      });
    }

    let apiType = 'put';
    if (!this.formData.id) {
      apiType = 'post';
    }
    this.isSubmitInProgress = true;
    this.api[apiType](`${this.resourceUrl}${this.formData.id ? `${this.formData.id}/` : ''}`, this.formData, true).subscribe((data: any) => {
      this.isSubmitInProgress = false;
      if (data) {
        if (this.dialogService.dialogRef) {
          let res = { type: 'success', data: data }
          this.dialogService.dialogRef.close(res);
        } else {
          this.api.formSubmit.next(apiType)
        }
      }
    }, (err) => {
      this.isSubmitInProgress = false;
      if (this.dialogService.dialogRef) {
        let res = { type: 'error', data: err }
        this.dialogService.dialogRef.close(res);
      } else {
        this.api.formSubmit.next(err)
      }
    });
  }

  // submitExtraFields(type, resData) {
  //   if (type === 'post') {
  //     let count = 0;
  //     Object.keys(this.extraFields).forEach(key => {
  //       let data = this.extraFormData[key];
  //       data[this.extraFields[key].keyId] = resData.id;
  //       this.api.post(this.extraFields[key].apiUrl, data).subscribe(res => {
  //         count = count + 1;
  //       })
  //     })
  //     if (this.dialogService.dialogRef) {
  //       let res = { type: 'success', data: resData }
  //       this.dialogService.dialogRef.close(res);
  //     } else {
  //       this.api.formSubmit.next(type)
  //     }
  //   }
  //   console.log(this.extraFormData)
  // }

  cancel() {
    console.log(this.dialogService.dialogRef)
    if (this.dialogService.dialogRef) {
      this.dialogService.dialogRef.close();
    } else {
      this.api.formSubmit.next();
    }

  }
}
