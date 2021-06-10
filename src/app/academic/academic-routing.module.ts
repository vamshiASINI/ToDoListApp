import { BatchSectionAddFromComponent } from './batch-section/batch-section-add-from/batch-section-add-from.component';
import { TopicsSkillsComponent } from './topics-skills/topics-skills.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ProgramComponent } from './program/program.component';
import { ModuleChapterComponent } from './module-chapter/module-chapter.component';
import { CourseGradeClassComponent } from './course-grade-class/course-grade-class.component';
import { BatchSectionComponent } from './batch-section/batch-section.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {
    path: '',
    component: SessionComponent
  },
  {
    path: 'batch-section',
    component: BatchSectionComponent
  },
  {
    path: 'batch-section/add',
    component: BatchSectionAddFromComponent
  },
  {
    path: 'course-grade-class',
    component: CourseGradeClassComponent
  }, {
    path: 'module-chapter',
    component: ModuleChapterComponent
  }, {
    path: 'program',
    component: ProgramComponent
  }, {
    path: 'subject',
    component: SubjectsComponent
  }, {
    path: 'topic-skill',
    component: TopicsSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
