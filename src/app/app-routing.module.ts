import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent }        from './users/user.component';
import { VehicleComponent }     from './vehicles/vehicle.component';
import { HomeComponent }        from './home/home.component';
import { LoginComponent }       from './login/login.component';

import { PublicComponent }      from './layouts/public.component';
import { SecureComponent }      from './layouts/secure.component';
import { PUBLIC_ROUTES }        from './public/public.routes';
import { SECURE_ROUTES }        from './secure/secure.routes';

import { CanActivateGuard }     from './common/can-activate.guard';

const routes: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [CanActivateGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
