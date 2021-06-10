# ZyimeTenantAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## run

npm run start:dev
npm run start:test

## build

npm run buildprod
 
 ng generate module module/student --route student --module app.module
 ng g c module/student/studentList

/Users/binay/dev/angular/zyime/guruehub/zyime-tenant-angular


/home/alisa/dev/angular/zyime/zyime-tenant-angular


## lazy module

ng g module academic --routing

in app-routing
{
path:'dashboard',
loadchildren:'./dashboard/dashboard.module#DashboardModule',
}
https://scotch.io/courses/working-with-the-angular-cli/child-module-routes-and-lazy-loading
https://scotch.io/courses/build-your-first-angular-website/lazy-loading-an-angular-section
