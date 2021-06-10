import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from './../employee.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FacultyTypeModel } from '../models/faculty-type-model';
import { FacultyTypeDataSource } from './faculty-type.datasource';
import { FacultyTypeService } from './faculty-type.service';
import { FormControl } from '@angular/forms';
import { DialogService } from 'src/app/common/services/dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-faculty-type',
  templateUrl: './faculty-type.component.html',
  styleUrls: ['./faculty-type.component.scss']
})
export class FacultyTypeComponent implements OnInit {

  facultyData = {};

  constructor(public tableSettings: tableSettingsObject) {
    this.facultyData = this.tableSettings.facultyType;
  }

  ngOnInit(): void {
  }
}

