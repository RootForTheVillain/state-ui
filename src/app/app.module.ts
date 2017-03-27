import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';;

import { AlertModule }          from 'ng2-bootstrap';

import { AppComponent }         from './app.component';
//import { UserComponent }        from './users/user.component';
import { TopMenuComponent }     from './common/top-menu/top-menu.component';
import { UserService }          from './users/user.service';
//import { VehicleComponent }     from './vehicles/vehicle.component';
import { HomeComponent }        from './home/home.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    //UserComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
