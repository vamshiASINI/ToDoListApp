import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodGroupComponent } from './period-group/period-group.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
  { path: '', component: PeriodGroupComponent },
  { path: 'timetable', component: TimetableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
