import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-settings-add-on-apps-delete',
  templateUrl: './settings-add-on-apps-delete.component.html',
  styleUrls: ['./settings-add-on-apps-delete.component.scss']
})
export class SettingsAddOnAppsDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
