import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { SessionComponent } from './session/session.component';

import { BatchSectionSubjectGroupComponent } from './batch-section-subject-group/batch-section-subject-group.component';
import { BatchSectionElectiveGroupComponent } from './batch-section-elective-group/batch-section-elective-group.component';
import { BatchSectionComponent } from './batch-section/batch-section.component';
import { CourseGradeClassComponent } from './course-grade-class/course-grade-class.component';
import { ModuleChapterComponent } from './module-chapter/module-chapter.component';
import { ModuleChapterSupportingAttachmentComponent } from './module-chapter-supporting-attachment/module-chapter-supporting-attachment.component';
import { ProgramComponent } from './program/program.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TopicsSkillsComponent } from './topics-skills/topics-skills.component';
import { TopicsSkillsSupportingAttachmentComponent } from './topics-skills-supporting-attachment/topics-skills-supporting-attachment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { SharedModuleModule } from '../common/shared-module/shared-module.module';
import { BatchSectionAddFromComponent } from './batch-section/batch-section-add-from/batch-section-add-from.component';


@NgModule({
  declarations: [
    SessionComponent,
    BatchSectionSubjectGroupComponent,
    BatchSectionElectiveGroupComponent,
    BatchSectionComponent,
    CourseGradeClassComponent,
    ModuleChapterComponent,
    ModuleChapterSupportingAttachmentComponent,
    ProgramComponent,
    SubjectsComponent,
    TopicsSkillsComponent,
    TopicsSkillsSupportingAttachmentComponent,
    BatchSectionAddFromComponent,
  ],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class AcademicModule { }
