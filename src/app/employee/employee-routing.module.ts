import { LeaveTypePaymentsComponent } from './leave-type-payments/leave-type-payments.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { EmployeeAdditionalInformationsComponent } from './employee-additional-informations/employee-additional-informations.component';
import { EmployeeCategorysComponent } from './employee-categorys/employee-categorys.component';
import { EmployeeDepartmentsComponent } from './employee-departments/employee-departments.component';
import { EmployeeDesignationsComponent } from './employee-designations/employee-designations.component';
import { EmployeeDocumentsComponent } from './employee-documents/employee-documents.component';
import { EmployeesComponent } from './employees/employees.component';
import { HrSettingsDocumentsTypesComponent } from './hr-settings-documents-types/hr-settings-documents-types.component';
import { HrSettingsCustomFieldsComponent } from './hr-settings-custom-fields/hr-settings-custom-fields.component';
import { LeaveGroupInfoComponent } from './leave-group-info/leave-group-info.component';
import { LeaveGroupsComponent } from './leave-groups/leave-groups.component';
import { FacultyTypeGradeComponent } from './faculty-type-grade/faculty-type-grade.component';
import { FacultyTypeComponent } from './faculty-type/faculty-type.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseFormComponent } from '../common/base-form/base-form.component';

const routes: Routes = [
  {
    path: 'faculty-type',
    component: FacultyTypeComponent
  }, {
    path: 'faculty-type-grade',
    component: FacultyTypeGradeComponent
  }, {
    path: 'base-form',
    component: BaseFormComponent
  }, {
    path: 'leave-type',
    component: LeaveTypesComponent
  }, {
    path: 'leave-type-payment',
    component: LeaveTypePaymentsComponent
  }, {
    path: 'leave-group',
    component: LeaveGroupsComponent
  }, {
    path: 'leave-group-info',
    component: LeaveGroupInfoComponent
  }, {
    path: 'hr-settings-custom-field',
    component: HrSettingsCustomFieldsComponent
  }, {
    path: 'hr-settings-documents-type',
    component: HrSettingsDocumentsTypesComponent
  }, {
    path: 'employee',
    component: EmployeesComponent
  }, {
    path: 'employee-document',
    component: EmployeeDocumentsComponent
  }, {
    path: 'employee-designations',
    component: EmployeeDesignationsComponent
  }, {
    path: 'employee-department',
    component: EmployeeDepartmentsComponent
  }, {
    path: 'employee-category',
    component: EmployeeCategorysComponent
  }, {
    path: 'employee-additional-information',
    component: EmployeeAdditionalInformationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
