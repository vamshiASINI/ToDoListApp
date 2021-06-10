import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent implements OnInit {
  table: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.table = data.tableSettings;
    this.table.apiUrl += `?&module_chapter_id = ${data.data.id}`;
    console.log(this.table)
  }

  ngOnInit(): void {
  }

}
