import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  formData = {};

  discussionGroupFields = [
    { name: 'topicName', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'startDate', type: 'date' },
    { name: 'endDate', type: 'date' },
    { name: 'discussionGroupType', type: 'select', dataSource: [{ value: 1, name: 'Private' }, { value: 2, name: 'Public' }] },
    { name: 'students', type: 'select', optional: true, dataSource: [{ value: 1, name: 'Student1' }, { value: 2, name: 'Student2' }] },
    { name: 'faculty', type: 'select', optional: true, dataSource: [{ value: 1, name: 'faculty1' }, { value: 2, name: 'faculty2' }] },
    { name: 'admin', type: 'chip' },
    { name: 'Moderator', type: 'chip' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {

  }
  submitForm() {

  }

}
