import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-employee-departments',
  templateUrl: './employee-departments.component.html',
  styleUrls: ['./employee-departments.component.scss']
})
export class EmployeeDepartmentsComponent implements OnInit {

  employeeDepartment = {}
  constructor(public tableSettings: tableSettingsObject) {
    this.employeeDepartment = this.tableSettings.employeeDepartment;
  }

  ngOnInit(): void {
  }

}
