import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-discussion-group',
  templateUrl: './view-discussion-group.component.html',
  styleUrls: ['./view-discussion-group.component.scss']
})
export class ViewDiscussionGroupComponent implements OnInit {
  groupTitle = '';
  groupType = '';
  discussionGroups = [
    {
      groupId: 1,
      groupName: 'B.Tech_EE_5THSem',
      type: 'Private'
    },
    {
      groupId: 2,
      groupName: 'B.Tech_EE_5THSem',
      type: 'Public'
    },
    {
      groupId: 3,
      groupName: 'B.Sc_3rd_Year',
      type: 'Private'
    },
    {
      groupId: 4,
      groupName: 'B.Com_1st_Year',
      type: 'Private'
    },
  ]

  chats = [
    {
      messageId: 1,
      sentBy: 'Rahul',
      isChatReceiver: true,
      message: 'Hi everyone',
      timestamp: '29/12/2020 12:30PM'
    },
    {
      messageId: 2,
      sentBy: 'Rohan',
      isChatReceiver: false,
      message: 'Hi sir',
      timestamp: '29/12/2020 12:31PM'
    },
    {
      messageId: 3,
      sentBy: 'Pavan',
      isChatReceiver: false,
      message: 'Hi Sir',
      timestamp: '29/12/2020 12:32PM'
    },
    {
      messageId: 4,
      sentBy: 'Prity',
      isChatReceiver: false,
      message: 'Hi sir',
      timestamp: '29/12/2020 12:32PM'
    },
    {
      messageId: 4,
      sentBy: 'Rahul',
      isChatReceiver: true,
      message: 'Today we will start chapter 9 of thermodynamics',
      timestamp: '29/12/2020 12:34PM'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.groupTitle = this.discussionGroups[0].groupName;
    this.groupType = this.discussionGroups[0].type
  }

  handleGroupChange(data) {
    this.groupTitle = data.groupName;
    this.groupType = data.type;
    if (data.groupId === 1) {
      this.chats = [
        {
          messageId: 1,
          sentBy: 'Rahul',
          isChatReceiver: true,
          message: 'Hi everyone',
          timestamp: '29/12/2020 12:30PM'
        },
        {
          messageId: 2,
          sentBy: 'Rohan',
          isChatReceiver: false,
          message: 'Hi sir',
          timestamp: '29/12/2020 12:31PM'
        },
        {
          messageId: 3,
          sentBy: 'Pavan',
          isChatReceiver: false,
          message: 'Hi Sir',
          timestamp: '29/12/2020 12:32PM'
        },
        {
          messageId: 4,
          sentBy: 'Prity',
          isChatReceiver: false,
          message: 'Hi sir',
          timestamp: '29/12/2020 12:32PM'
        },
        {
          messageId: 4,
          sentBy: 'Rahul',
          isChatReceiver: true,
          message: 'Today we will start chapter 9 of thermodynamics',
          timestamp: '29/12/2020 12:34PM'
        },
      ]
    } else {
      this.chats = [];
    }
  }

}
