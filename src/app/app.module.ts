import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavMenuComponent } from './nav/main-nav-menu/main-nav-menu.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AddHeaderInterceptor } from './core/add-header.interceptor';
import { AddTokenrInterceptor } from './core/add-token.interceptor';
import { UnauthorizedInterceptor } from './core/unauthorized.interceptor';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ConfirmDialogboxComponent } from './common/dialogbox/confirm-dialogbox/confirm-dialogbox.component';
import { SideMenuIconComponent } from './nav/main-nav-menu/side-menu-icon/side-menu-icon.component';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './dashboard/contact/contact.component';
// import { PeriodGroupComponent } from './timetable/period-group/period-group.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainNavMenuComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    DashboardComponent,
    ConfirmDialogboxComponent,
    SideMenuIconComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatInputModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenrInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
