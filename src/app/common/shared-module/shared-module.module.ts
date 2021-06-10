import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/camelize.pipe';
import { DialogBoxComponent } from '../dialogbox/dialog-box/dialog-box.component';
import { BaseTableComponent } from '../base-table/base-table.component';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FilterDialogboxComponent } from '../dialogbox/filter-dialogbox/filter-dialogbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material-module';
import { ViewDialogComponent } from '../dialogbox/view-dialog/view-dialog.component';



@NgModule({
  declarations: [
    CapitalizePipe,
    DialogBoxComponent,
    BaseTableComponent,
    BaseFormComponent,
    FilterDialogboxComponent,
    ViewDialogComponent
  ],
  imports: [
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    DialogBoxComponent,
    BaseTableComponent,
    BaseFormComponent,
    FilterDialogboxComponent,
  ]
})
export class SharedModuleModule { }
