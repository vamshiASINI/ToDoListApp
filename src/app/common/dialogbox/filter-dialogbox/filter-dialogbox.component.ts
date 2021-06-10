import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';
// import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-filter-dialogbox',
  templateUrl: './filter-dialogbox.component.html',
  styleUrls: ['./filter-dialogbox.component.scss'],

})
export class FilterDialogboxComponent implements OnInit, OnChanges {

  public autoCompleteModel = {};
  public dropDownModel = {};
  public filteredOptions: any = [];
  searchDatadata: { value: any; field: any; };
  subscription: any;
  searchTextChanged = new Subject<any>()
  pageSize = 10;
  offset = 0;
  isAutoCompleteLoading = {};

  autoCompleteSelected = {}


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, public dialogRef: MatDialogRef<FilterDialogboxComponent>) {
    console.log(data)
  }

  ngOnInit(): void {
    this.checkAppliedFilter();
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(() => this.autoComplete(this.searchDatadata))
    ).subscribe(data => {
      this.isAutoCompleteLoading[this.searchDatadata.field.name] = false;
      this.filteredOptions = data.results;
    });
  }

  ngOnChanges(event) {
    console.log(event)
  }

  checkAppliedFilter() {
    if (this.data?.selectedData) {
      Object.keys(this.data.selectedData).forEach(key => {
        this.data.settings.formData[key] = this.data.selectedData[key]
        if (typeof this.data.selectedData[key] === 'object') {
          this.dropDownModel[key] = [];
          this.data.selectedData[key].forEach(element => {
            if (element.fieldType && element.fieldType === 'dropdown') {
              this.dropDownModel[key].push(element[element.key])
            }
          });
          this.dropDownModel[key] = [...this.dropDownModel[key]]
        }
      })
    }
  }

  applyFilter() {
    console.log(this.data.settings.formData)
    this.dialogRef.close(this.data.settings.formData);
  }

  changeDateFormat(val, fieldName) {
    let date = new Date(val)
    this.data.settings.formData[fieldName] = date.toISOString();
    console.log(this.data.settings.formData)
  }

  toggleIntermediate(option) {
    return option === undefined ? true : option == true ? false : undefined;
  }

  autoComplete({ value, field }) {
    console.log(field)
    // console.log(event.target.value)
    let queryParams = `&limit=${this.pageSize}&offset=${this.offset}`;
    queryParams += `&search=${value}&search_fields=${field.dataSourceValue}`;
    console.log(queryParams);
    if (field.dataSourceUrl) {
      return this.api.get(`${field.dataSourceUrl}?${queryParams}`)
    }
  }

  search($event, field) {
    this.isAutoCompleteLoading[field.name] = true;
    this.searchDatadata = {
      value: $event.target.value,
      field: field
    }
    this.searchTextChanged.next(this.searchDatadata);
  }

  dropdwnChange(field) {
    console.log(this.data.settings.formData)
    this.data.settings.formData[field.name] = [];
    if (this.dropDownModel[field.name] && this.dropDownModel[field.name].length) {
      this.dropDownModel[field.name].forEach(element => {
        if (!this.data.settings.formData[field.name]) {
          this.data.settings.formData[field.name] = [];
        }
        this.data.settings.formData[field.name].push({
          name: field.name,
          [field.name + '_id__in']: element,
          value: this.extractValue(field.dataSource, element),
          key: field.name + '_id__in',
          fieldType: 'dropdown'
        })
      });
    } else {
      this.data.settings.formData[field.name] = [];
    }

    console.log(this.data.settings.formData)
  }

  extractValue(arr, key) {
    let value;
    arr.forEach(element => {
      if (element.value === key) {
        value = element.name;
      }
    });

    return value;
  }

  extractType(data) {
    return typeof data;
  }

  deleteFilter(field, type, index?, fieldtype?) {
    if (type === 'boolean' || type === 'string') {
      this.data.settings.formData[field] = undefined;
    } else if (type === 'object') {
      if (fieldtype && fieldtype === 'dropdown') {
        this.dropDownModel[field].splice(index, 1);
        this.dropDownModel[field] = [...this.dropDownModel[field]]
      }
      this.data.settings.formData[field].splice(index, 1)
    }

    console.log(this.dropDownModel[field])
  }

  clearAll() {
    this.data.settings.formData = {};
    this.dropDownModel = {};
    this.autoCompleteModel = {};
  }

  onAutoCompleteChange(event?, form?) {
    console.log(form, event)
    if (event) {
      if (!this.data.settings.formData[form.name]) {
        this.data.settings.formData[form.name] = [];
      }
      let doesExistIndex = -1;
      this.data.settings.formData[form.name].every((ele, index) => {
        if (ele[form.dataSourceKey + '__in'] == event.option.id) { doesExistIndex = index; return false; }
        else return true;
      });
      if (doesExistIndex > -1) this.data.settings.formData[form.name].splice(doesExistIndex, 1);
      console.log(event.option.value);
      this.data.settings.formData[form.name].push({ name: form.name, [form.dataSourceKey + '__in']: event.option.id, value: event.option.value, key: form.dataSourceKey + '__in' });
      this.autoCompleteModel[form.name] = '';
    }
    this.filteredOptions = [];
  }



}
