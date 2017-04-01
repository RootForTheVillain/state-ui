import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { UserComponent }        from './users/user.component';

const routes: Routes = [

  { path: '', redirectTo: 'users/1', pathMatch: 'full' },
  { path: 'users/:id', component: HomeComponent },
{ path: 'users', component: UserComponent }
  //{ path: '**', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
