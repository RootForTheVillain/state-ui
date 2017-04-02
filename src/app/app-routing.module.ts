import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { UserComponent }        from './users/user.component';
import { LoginComponent }       from './login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: HomeComponent },
  { path: 'users/:id/vehicles/:year/:month', component: HomeComponent },
  { path: 'users', component: UserComponent }
  //{ path: '**', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
