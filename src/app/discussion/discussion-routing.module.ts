import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionComponent } from './discussion.component';
import { ViewDiscussionGroupComponent } from './view-discussion-group/view-discussion-group.component';

const routes: Routes = [
  { path: '', component: DiscussionComponent },
  { path: 'discussion-group', component: ViewDiscussionGroupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
