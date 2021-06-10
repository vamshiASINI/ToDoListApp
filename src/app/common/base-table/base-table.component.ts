import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DialogService } from '../services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, NgModel } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { tableSettingsObject } from '../globalObjects/tableSettingsObject';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import clonedeep from 'lodash.clonedeep';

@Component({
  selector: 'base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BaseTableComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input('tableSettings') tableSettings;
  @Input('actionColumnAllowed') actionColumnAllowed;
  @Input('headingHide') headingHide;
  @Input('titleHide') titleHide;
  @Input('preFilter') preFilter;
  @Input('isView') isView;

  displayedColumns: string[] = [];
  tempFields = [];
  tempFormSettings: any = {};
  dataSource: any;
  @ViewChild('table1') table1: MatTable<any>;
  @ViewChild('list1') list1: CdkDropList;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isEditMode = false;
  limit = 20;
  offset = 0;
  pageSize = 20;
  dataLength: number;
  pageSizeOptions = [10, 20, 50];
  pageEvent: PageEvent;
  pageNo = 1;
  params = `&limit=${this.pageSize}&offset=${this.offset}`;

  selectionFields = []
  selectedFields = new FormControl();
  searchTerm: string;
  searchTextChanged = new Subject<any>()
  subscription: Subscription;
  formSubscription: Subscription;
  sorting;
  filterObject;
  isDataLoading = false;
  expandedElement: any;
  viewTableSettings: any = {};

  constructor(private api: ApiService, private dialogService: DialogService, private _snackBar: MatSnackBar, public tableSettingsObject: tableSettingsObject) {

  }

  ngOnInit(): void {
    console.log(this.tableSettings)
    console.log(this.actionColumnAllowed)
    this.extractColumns();
    this.setParams();
    this.fetchData()

    this.subscription = this.searchTextChanged.pipe(
      debounceTime(500),
      mergeMap(() => this.fetchFilteredData())
    ).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.results);
      this.dataLength = res.count;
      this.isDataLoading = false;
    }, err => { console.log(err); this.isDataLoading = false; });
  }

  ngAfterViewInit() {
    this.tempFields = [...this.tableSettings.fields]
  }

  ngOnChanges() {
    console.log(this.preFilter);
    this.setParams();
    this.fetchData();
    this.isEditMode = false;
    console.log(this.tableSettings)
  }

  extractColumns() {
    this.displayedColumns = [];
    if (this.isView) {
      this.displayedColumns = ['expand']
    }
    if (this.tableSettings?.fields) {
      if (this.tableSettings.dragnDrop) {
        this.displayedColumns.push('dragnDrop')
      }
      if (!this.tableSettings.tableColumnOrder) {
        this.tableSettings.fields.forEach(field => {
          if (!field.isTableHidden) this.displayedColumns.push(field.name);

          if (!field.isTableHidden && field.type !== 'boolean' && field.type !== 'date' && field.type !== 'autoComplete' && field.type !== 'select') {
            this.selectionFields.push(field.name);
          }
        });
      } else {
        this.displayedColumns = [...this.tableSettings.tableColumnOrder];
      }
      if (this.actionColumnAllowed) {
        this.displayedColumns.push('action');
      }

      this.selectedFields.setValue(this.selectionFields);
      console.log(this.selectedFields)
    }
  }

  fetchData() {
    if (this.tableSettings?.apiUrl) {
      this.isDataLoading = true;
      this.dataSource = [];
      let apiUrl = this.tableSettings.apiUrl.indexOf('?') >= 0 ? `${this.tableSettings.apiUrl}${this.params}` : `${this.tableSettings.apiUrl}?${this.params}`;
      this.api.get(apiUrl).subscribe(res => {
        this.dataSource = new MatTableDataSource(res.results);
        this.dataLength = res.count;
        this.isDataLoading = false;
      }, err => { console.log(err); this.isDataLoading = false; })
    }
  }


  filter(event) {
    this.resetFilter();
    this.searchTerm = event.target.value;
    this.searchTextChanged.next();
  }

  fetchFilteredData() {
    if (this.tableSettings?.apiUrl) {
      this.setParams()
      this.isDataLoading = true;
      this.dataSource = []
      return this.api.get(`${this.tableSettings.apiUrl}?${this.params}`)
    }
  }

  dropdwnChange() {
    if (this.searchTerm && this.tableSettings?.apiUrl) {
      this.setParams();
      this.fetchData()
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    // updates moved data and table, but not dynamic if more dropzones
    this.dataSource.data = clonedeep(this.dataSource.data);
  }

  sortColumn(event) {
    console.log(event)
    this.sorting = event;
    this.setParams()
    this.fetchData()
  }

  handlePagination(event) {
    this.pageSize = event.pageSize;
    this.pageNo = event.pageIndex + 1;
    this.setParams();
    this.fetchData();
  }

  add(extraTableData?) {
    this.tempFormSettings = JSON.parse(JSON.stringify(this.tableSettings));
    this.isEditMode = true;
    if (extraTableData) {
      this.tempFormSettings = this.tableSettingsObject[extraTableData.tableData];
    }
    // this.tableSettings.formData = {};
    // this.tableSettings.fields = JSON.parse(JSON.stringify(this.tempFields));
    // this.dialogService.openDialog(this.tableSettings).afterClosed().subscribe(data => {

    this.formSubscription = this.api.formSubmit.subscribe(data => {
      console.log(data);
      if (data === 'post') {
        this.resetFilter();
        this.isEditMode = false;
        this.fetchData();
        this.dialogService.openSnackBar(this._snackBar, 'Added successfully', 'Success');
      } else if (data === 'put') {
        this.resetFilter();
        this.isEditMode = false;
        this.fetchData();
        this.dialogService.openSnackBar(this._snackBar, 'Edited successfully', 'Success');
      } else if (typeof data === 'object' && data.error) {
        this.dialogService.openSnackBar(this._snackBar, 'Duplicate records or some network problem occures', 'Failed');
      } else {
        // console.log(tempData);
        this.isEditMode = false;
      }
    });



  }

  edit(data) {
    if (!this.headingHide) {
      this.isEditMode = true;
      this.tempFormSettings = JSON.parse(JSON.stringify(this.tableSettings));
      this.tempFormSettings.formData = { ...data };
      this.formSubscription = this.api.formSubmit.subscribe(data => {
        console.log(data);
        if (data === 'post') {
          this.resetFilter();
          this.isEditMode = false;
          this.fetchData();
          this.dialogService.openSnackBar(this._snackBar, 'Added successfully', 'Success');
        } else if (data === 'put') {
          this.resetFilter();
          this.isEditMode = false;
          this.fetchData();
          this.dialogService.openSnackBar(this._snackBar, 'Edited successfully', 'Success');
        } else if (typeof data === 'object' && data.error) {
          this.dialogService.openSnackBar(this._snackBar, data.error.name[0], 'Failed');
        } else {
          this.isEditMode = false;
        }
      });
    } else {
      this.api.employeeEdit.next(data);
    }

  }

  delete(data, deleteField?) {
    console.log(data)
    if (this.tableSettings.isConditionalDelete) {
      data.isConditionalDelete = this.tableSettings.isConditionalDelete;
    }

    data.message = `Are you sure want to delete "${data[deleteField] || data.name}"?`
    this.dialogService.confirmDialog(data).afterClosed().subscribe(res => {
      console.log(res)
      if (res) {
        const apiUrl = `${this.tableSettings.apiUrl}${data.id}`
        this.api.delete(apiUrl).subscribe(response => {
          this.dialogService.openSnackBar(this._snackBar, 'Deleted successfully', 'Success');
          this.resetFilter();
          this.fetchData();
        }, (err) => {
          this.dialogService.openSnackBar(this._snackBar, 'Some network issue', 'Failed');
        })
      }
    })
  }

  setParams() {
    this.params = `&limit=${this.pageSize}&offset=${this.pageSize * (this.pageNo - 1)}`;
    if (this.preFilter) {
      this.preFilter.forEach(element => {
        this.params += `&${element.key}=${element.value}`
      });
    }
    if (this.searchTerm) {
      this.params += `&search=${this.searchTerm}`;
      this.selectedFields.value.forEach(element => {
        this.params += `&search_fields=${element}`
      });
    }

    if (this.sorting) {
      if (this.sorting.direction === 'asc') {
        this.params += `&ordering=${this.sorting.active}`;
      } else if (this.sorting.direction === "desc") {
        this.params += `&ordering=-${this.sorting.active}`;
      }
    }

    if (this.filterObject) {
      Object.keys(this.filterObject).forEach(keys => {
        if (this.filterObject[keys] !== undefined && (typeof this.filterObject[keys] === 'string' || typeof this.filterObject[keys] === 'boolean')) {
          this.params += `&${keys}=${this.filterObject[keys]}`;
        } else if (this.filterObject[keys] !== undefined && (typeof this.filterObject[keys] === 'object')) {
          let idKeyValue = { keyword: '', value: [] };
          this.filterObject[keys].forEach(element => {
            idKeyValue.value.push(element[element.key]);
            idKeyValue.keyword = element.key;
          });

          if (idKeyValue.keyword !== '') {
            this.params += `&${idKeyValue.keyword}=${idKeyValue.value.join()}`;
          }
        }

      })
    }
  }

  toggleActive(field, value, formData) {
    console.log(formData);
    let data: any = {};
    if (value) {
      data.message = `Are you sure want to deactivate?`
      this.dialogService.confirmDialog(data).afterClosed().subscribe(res => {
        if (res) {
          this.callToggleApi(field, value, formData)
        }
      });
    } else if (field.isBothCheck) {
      data.message = `If you will activate this session then other session will be deactivated. Do you want to continue?`
      this.dialogService.confirmDialog(data).afterClosed().subscribe(res => {
        if (res) {
          this.callToggleApi(field, value, formData)
        }
      });
    } else {
      this.callToggleApi(field, value, formData)
    }
  }

  callToggleApi(field, value, formData) {
    const apiUrl = `${this.tableSettings.apiUrl}${formData.id}/`;
    let formDataClone = { ...formData }
    formDataClone[field.name] = !value;
    this.api.put(apiUrl, formDataClone).subscribe(response => {
      this.dialogService.openSnackBar(this._snackBar, `${value ? 'Deactivated' : 'Activated'} successfully`, 'Success');
      this.resetFilter();
      this.fetchData();
    }, (err) => {
      this.dialogService.openSnackBar(this._snackBar, 'Some network issue', 'Failed');
    })
  }

  resetFilter() {
    this.searchTerm = undefined;
    this.pageSize = 5;
    this.pageNo = 1;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.params = `&limit=${this.pageSize}&offset=${this.pageSize * (this.pageNo - 1)}`;
    if (this.preFilter) {
      this.preFilter.forEach(element => {
        this.params += `&${element.key}=${element.value}`
      });
    }
  }

  View(ViewId, data) {
    console.log(ViewId)
    let tableSettings = { ...this.tableSettingsObject[ViewId] };

    // specific to module chapter section. have to make dynamic later
    tableSettings.apiUrl += `?&module_chapter_id__in=${data.id}`;
    tableSettings.fields.forEach(element => {
      if (element.name === 'module_chapter_id') {
        element.defaultValue = data.id;
        element.isFormHidden = true;
      }
      if (data.score_options_id === 2) {
        if (element.name === 'max_marks') {
          element.isFormHidden = true;
        }
      }
    });

    this.viewTableSettings[`index${data.id}`] = JSON.parse(JSON.stringify(tableSettings))
    console.log(this.viewTableSettings);
  }

  applyFilter() {
    console.log(this.tableSettings);
    this.tableSettings.formData = {};
    this.dialogService.filterDialog(this.tableSettings, this.filterObject).afterClosed().subscribe(data => {
      if (data && typeof data === 'object') {
        this.filterObject = data;
        this.resetFilter()
        this.setParams();
        this.fetchData();
        console.log(data)
      }
    })
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe()
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
