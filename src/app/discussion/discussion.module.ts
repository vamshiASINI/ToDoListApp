import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionRoutingModule } from './discussion-routing.module';
import { DiscussionComponent } from './discussion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from '../common/shared-module/shared-module.module';
import { MaterialModule } from '../material-module';
import { ViewDiscussionGroupComponent } from './view-discussion-group/view-discussion-group.component';


@NgModule({
  declarations: [DiscussionComponent, ViewDiscussionGroupComponent],
  imports: [
    CommonModule,
    DiscussionRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class DiscussionModule { }
