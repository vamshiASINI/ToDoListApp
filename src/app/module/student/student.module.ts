import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCategoryComponent } from './student-category/student-category.component';
import { SharedModuleModule } from '../../common/shared-module/shared-module.module';
import { StudentDocumentComponet } from './student-document/student-document.component';
import { StudentCustomFieldComponent } from './student-custom-field/student-custom-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentCategoryComponent, StudentDocumentComponet, StudentCustomFieldComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModuleModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class StudentModule { }
