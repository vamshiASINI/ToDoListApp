import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { InstitutionModel } from 'src/app/models/institutionModel';
import { CustomLabelsUpdateService } from 'src/app/services/common/custom-labels-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.scss']
})
export class MainNavMenuComponent implements OnInit, OnDestroy {
  @Output() closeMenuNow = new EventEmitter();
  constructor(private renderer: Renderer2, private _auth: AuthService, private _customLabelsUpdateService: CustomLabelsUpdateService) { }
  session = 'Session';
  program = 'Program';
  course = 'Course Grade Class';
  batch = 'Batch Section';
  subject = 'Subject';
  module = 'Module / Chapter';
  topic = 'Topic / Skill';
  customLable: InstitutionModel;
  customLableUpdateService: Subscription;
  /*menu submenu*/
  employeesLeaveManagement = false;
  employeesSettings = false;
  studentsSettings = false;
  /*menu*/
  menuBilling = false;
  menuPrivileged = false;
  meunSupport = false;
  menuSetting = false;
  menuHealth = false;
  menuEmployee = false;
  menuAccademic = false;
  menuHome = true;
  menuRoles = false;
  menuTimetable = false;
  menuDiscussion = false;
  menuStudent = false;
  menuContact=false;
  ngOnInit(): void {
    this.updateMenuCustomLable();

    this.customLableUpdateService = this._customLabelsUpdateService.getMessage().subscribe(
      res => {
        this.updateMenuCustomLable();
        // console.log('update menu');
      }
    );

  }
  ngOnDestroy(): void {
    this.customLableUpdateService.unsubscribe();
  }
  closeOther(): void {
    this.menuHome = false;
    this.menuRoles = false;
    this.menuBilling = false;
    this.menuPrivileged = false;
    this.meunSupport = false;
    this.menuSetting = false;
    this.menuHealth = false;
    this.menuEmployee = false;
    this.menuAccademic = false;
    this.menuTimetable = false;
    this.menuDiscussion = false;
    this.menuStudent = false;
    this.menuContact=false;
    // console.log('close');
  }
  updateMenuCustomLable(): void {
    this.customLable = this._auth.loadDataNowFromLocalForCustomLable();
    if (this.customLable) {

      this.program = this.customLable.customLabels.program;
      this.course = this.customLable.customLabels.course;
      this.batch = this.customLable.customLabels.batch;
      // this.subject = this.customLable.customLabels.subject_group;
      this.module = this.customLable.customLabels.module_chapter;
      this.topic = this.customLable.customLabels.topics_skills;

    }
    // console.log('update menu', this.customLable);
  }
  /*onClick(): void {
    console.log('click');
    this.closeMenuNow.emit();
  }*/
  onClickSelf(valHtml): void {
    // console.log('click', valHtml);
    // console.log('Child:', valHtml.target);
    // console.log('Parent:', valHtml.target.parentNode);
    // console.log('Parents parent sibling:1 :', valHtml.target.parentNode.parentNode);
    // console.log('Parents parent sibling:2 :', valHtml.target.parentNode.parentNode.parentNode);
    // console.log('Parents parent sibling:3 :', valHtml.target.parentNode.parentNode.parentNode.parentNode);
    // console.log('Parents parent sibling:4 :', valHtml.target.parentNode.parentNode.nextSibling);

    const htmlMenu = valHtml.target.parentNode.parentNode.parentNode.children;
    // console.log(htmlMenu);
    Array.from(htmlMenu).forEach(element => {
      // console.log(element);
      this.renderer.removeClass(element, 'showSubMenu1stlevel');
    });
    this.renderer.addClass(valHtml.target.parentNode.parentNode, 'showSubMenu1stlevel');
    this.closeMenuNow.emit();
  }
}
