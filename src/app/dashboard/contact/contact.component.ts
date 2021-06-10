import { contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
contact:contact
bottomPanelBGCColor = '#fff';

globalAPIResponse = {
  country: [],
  currency: [],
  religion: [],
  maritalStatus: [],
  state: [],
  qualification: [],
  gender: [],
  bloodGroup: [],
  autoComplete: []
}
  constructor() {
    this.contact=new contact()
  }

  submit() {
    console.log()
  }
  cancel() {
    this.resetFormfield();

  }
  resetFormfield() {
    this.contact={
      first_name:null,
      middle_name:null,
      last_name:null,
      phone:null,
      message:null,
      city:null,
      date:null
    }
  }
  ngOnInit(): void {

  }

}
