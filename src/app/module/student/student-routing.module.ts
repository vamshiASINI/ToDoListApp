import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentCategoryComponent } from './student-category/student-category.component';
import { StudentCustomFieldComponent } from './student-custom-field/student-custom-field.component';
import { StudentDocumentComponet } from './student-document/student-document.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'student-category', component: StudentCategoryComponent },
  { path: 'settings-documents-type', component: StudentDocumentComponet}, 
  { path: 'settings-custom-field', component: StudentCustomFieldComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
