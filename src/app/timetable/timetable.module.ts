import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { PeriodGroupComponent } from './period-group/period-group.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SharedModuleModule } from '../common/shared-module/shared-module.module';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PeriodGroupComponent, TimetableComponent],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    SharedModuleModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class TimetableModule { }
