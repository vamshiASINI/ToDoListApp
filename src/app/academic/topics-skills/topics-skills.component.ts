import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Component({
  selector: 'app-topics-skills',
  templateUrl: './topics-skills.component.html',
  styleUrls: ['./topics-skills.component.scss']
})
export class TopicsSkillsComponent implements OnInit {
  topicsData: any = {}
  customLable: InstitutionModel;
  constructor(public tableSettings: tableSettingsObject, private _authService: AuthService) {
    this.topicsData = this.tableSettings.academicTopicSkills;
  }

  ngOnInit(): void {
    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    this.topicsData.title = this.customLable.customLabels.topics_skills;
  }

}
