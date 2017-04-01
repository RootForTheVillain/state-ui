import { Component, OnInit }  from '@angular/core';

import { Vehicle }             from './vehicle';
import { User }               from '../users/user';
import { UserService }        from '../users/user.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicle.component.html'
})

export class VehicleComponent implements OnInit {


  ngOnInit(): void {

  }


}
