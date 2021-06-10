import { Component, OnInit } from '@angular/core';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';

@Component({
  selector: 'app-employee-designations',
  templateUrl: './employee-designations.component.html',
  styleUrls: ['./employee-designations.component.scss']
})
export class EmployeeDesignationsComponent implements OnInit {

  employeeDesignation = {}

  constructor(public tableSettings: tableSettingsObject) {
    this.employeeDesignation = this.tableSettings.employeeDesignation;
  }

  ngOnInit(): void {
  }

}
