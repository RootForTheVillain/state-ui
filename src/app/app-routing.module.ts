import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';

const routes: Routes = [
  /*{ path: '', redirectTo: 'users/1/2017/november', pathMatch: 'full' },*/
  { path: 'users/:id/:year/:month',  component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
