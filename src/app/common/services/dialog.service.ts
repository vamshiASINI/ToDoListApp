import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogboxComponent } from '../dialogbox/confirm-dialogbox/confirm-dialogbox.component';
import { DialogBoxComponent } from '../dialogbox/dialog-box/dialog-box.component';
import { FilterDialogboxComponent } from '../dialogbox/filter-dialogbox/filter-dialogbox.component';
import { ViewDialogComponent } from '../dialogbox/view-dialog/view-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogRef: any;
  filterDialogRef: any;
  confirmDialogRef: any;

  constructor(public dialog: MatDialog) { }

  openDialog(data) {
    console.group(data);
    return this.dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      maxHeight: '70vh',
      data
    });
  }

  filterDialog(data, selectedData) {
    console.group(data);
    return this.filterDialogRef = this.dialog.open(FilterDialogboxComponent, {
      width: '500px',
      maxHeight: '70vh',
      data: {
        settings: data,
        selectedData
      }
    });
  }

  confirmDialog(data) {
    return this.confirmDialogRef = this.dialog.open(ConfirmDialogboxComponent, {
      width: '400px',
      data: {
        data
      }
    });
  }

  openViewDialog(data) {
    console.group(data);
    return this.dialogRef = this.dialog.open(ViewDialogComponent, {
      width: '800px',
      maxHeight: '70vh',
      data
    });
  }

  openSnackBar(snackbar, message: string, action: string) {
    snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
