import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { tableSettingsObject } from 'src/app/common/globalObjects/tableSettingsObject';
import { InstitutionModel } from 'src/app/models/institutionModel';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {


  programsData: any = {};
  customLable: InstitutionModel;
  constructor(private _authService: AuthService, public tableSettings: tableSettingsObject) {
    this.programsData = this.tableSettings.academicProgram;
  }

  ngOnInit(): void {

    this.customLable = this._authService.loadDataNowFromLocalForCustomLable();
    this.programsData.title = this.customLable.customLabels.program;
  }


}
