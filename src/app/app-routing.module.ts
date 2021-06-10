import { ContactComponent } from './dashboard/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardIsLoginUser } from './guard/auth.guard.islogin.user';
import { AuthGuardLogin } from './guard/auth.guard.login';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardIsLoginUser]
  },
  {
    path:'contact',component:ContactComponent,canActivate:[]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLogin]
  },
  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(m => m.BillModule),
    canActivate: [AuthGuardIsLoginUser]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    canActivate: [AuthGuardIsLoginUser]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [AuthGuardIsLoginUser]
  },
  {
    path: 'academic',
    loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule),
    canActivate: [AuthGuardIsLoginUser]
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuardIsLoginUser]
  },
  { path: 'timetable', loadChildren: () => import('./timetable/timetable.module').then(m => m.TimetableModule) },
  { path: 'discussion', loadChildren: () => import('./discussion/discussion.module').then(m => m.DiscussionModule) },
  { path: 'student', loadChildren: () => import('./module/student/student.module').then(m => m.StudentModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
