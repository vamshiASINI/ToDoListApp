import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  ngOnInit(): void {
    console.log(this.data)
  }

}
