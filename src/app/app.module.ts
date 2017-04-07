import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';;

import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule }       from 'ngx-bootstrap/carousel';
import { AlertModule }          from 'ng2-bootstrap';

import { AppComponent }         from './app.component';
import { UserComponent }        from './users/user.component';
import { TopMenuComponent }     from './common/top-menu/top-menu.component';
import { UserService }          from './users/user.service';
import { VehicleService }       from './vehicles/vehicle.service';
import { VehicleComponent }     from './vehicles/vehicle.component';
import { HomeComponent }        from './home/home.component';
import { LoginComponent }       from './login/login.component';
import { PublicComponent }      from './layouts/public.component';
import { SecureComponent }      from './layouts/secure.component';

import { AppRoutingModule }     from './app-routing.module';
import { CanActivateGuard }     from './common/can-activate.guard';
import { UtilsService }         from './common/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    VehicleComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    NgbModule.forRoot(),
    //AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ UserService, VehicleService, UtilsService, CanActivateGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
