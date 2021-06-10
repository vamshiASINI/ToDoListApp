import { Component, OnInit, OnDestroy, ViewChild, Inject, Renderer2, AfterViewInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavUpdateService } from './services/common/nav-update.service';
import { Subscription } from 'rxjs';
import { AppConfig } from './appConfig';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('mainNave') mainNave;

  title = 'zyime-tenant-angular';
  subscriptionNavUpdateService: Subscription;
  darkModeIsOn: boolean;

  constructor(private navUpdateService: NavUpdateService,
    private _renderer: Renderer2, @Inject(DOCUMENT) private document: Document,
    overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('app-dark-theme');
  }
  ngOnInit(): void {

    this.darkModeIsOn = JSON.parse(localStorage.getItem(AppConfig.darkMode));
    // console.log(this.darkModeIsOn);
    this.subscriptionNavUpdateService = this.navUpdateService.getMessage().subscribe(
      res => {
        // console.log(res);

        this.darkModeIsOn = JSON.parse(res);
        localStorage.setItem(AppConfig.darkMode, JSON.stringify(res));
        this.setDarkMode();
      }
    );
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.setDarkMode();
    this._renderer.addClass(this.document.body, "logicLogin")


  }
  ngOnDestroy(): void {
    this.subscriptionNavUpdateService.unsubscribe();
    this._renderer.addClass(this.document.body, "logicLogin")
  }
  setDarkMode(): void {
    // console.log(this.darkModeIsOn);
    if (this.darkModeIsOn) {
      this._renderer.addClass(document.body, 'unicorn-dark-theme');
    } else {
      this._renderer.removeClass(document.body, 'unicorn-dark-theme');
    }
  }

}
