import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-employee-categorys',
  templateUrl: './employee-categorys.component.html',
  styleUrls: ['./employee-categorys.component.scss']
})
export class EmployeeCategorysComponent implements OnInit {
  employeeCategory = {}

  constructor(public tableSettings: tableSettingsObject) {
    this.employeeCategory = this.tableSettings.employeeCategory;
  }

  ngOnInit(): void {
  }

}
