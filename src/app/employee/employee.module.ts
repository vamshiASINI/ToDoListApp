import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FacultyTypeComponent } from './faculty-type/faculty-type.component';
import { FacultyTypeGradeComponent } from './faculty-type-grade/faculty-type-grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { LeaveTypePaymentsComponent } from './leave-type-payments/leave-type-payments.component';
import { LeaveGroupsComponent } from './leave-groups/leave-groups.component';
import { LeaveGroupInfoComponent } from './leave-group-info/leave-group-info.component';
import { HrSettingsCustomFieldsComponent } from './hr-settings-custom-fields/hr-settings-custom-fields.component';
import { HrSettingsDocumentsTypesComponent } from './hr-settings-documents-types/hr-settings-documents-types.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDocumentsComponent } from './employee-documents/employee-documents.component';
import { EmployeeDesignationsComponent } from './employee-designations/employee-designations.component';
import { EmployeeDepartmentsComponent } from './employee-departments/employee-departments.component';
import { EmployeeCategorysComponent } from './employee-categorys/employee-categorys.component';
import { EmployeeAdditionalInformationsComponent } from './employee-additional-informations/employee-additional-informations.component';
import { SharedModuleModule } from '../common/shared-module/shared-module.module';


@NgModule({
  declarations: [
    FacultyTypeComponent,
    FacultyTypeGradeComponent,
    LeaveTypesComponent,
    LeaveTypePaymentsComponent,
    LeaveGroupsComponent,
    LeaveGroupInfoComponent,
    HrSettingsCustomFieldsComponent,
    HrSettingsDocumentsTypesComponent,
    EmployeesComponent,
    EmployeeDocumentsComponent,
    EmployeeDesignationsComponent,
    EmployeeDepartmentsComponent,
    EmployeeCategorysComponent,
    EmployeeAdditionalInformationsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class EmployeeModule { }
