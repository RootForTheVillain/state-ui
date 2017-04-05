import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent }        from '../users/user.component';
import { VehicleComponent }     from '../vehicles/vehicle.component';
import { HomeComponent }        from '../home/home.component';


export const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'users/:id', pathMatch: 'full' },
  { path: 'users/:id', component: HomeComponent },
  { path: 'users/:id/vehicles/:year/:month', component: VehicleComponent },
  { path: 'users', component: UserComponent }
];
