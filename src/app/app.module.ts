import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
//import { RouterModule }         from '@angular/router';

import { AlertModule }          from 'ng2-bootstrap';

import { AppComponent }         from './app.component';
import { UserComponent }        from './users/user.component';
//import { TopMenuComponent }     from './common/top-menu/top-menu.component';
import { UserService }          from './users/user.service';
import { VehicleComponent }     from './vehicles/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    //TopMenuComponent,
    UserComponent,
    VehicleComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
