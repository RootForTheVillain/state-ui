import { Component, OnInit, Input }        from '@angular/core';

import { Router }                   from '@angular/router';

import { UtilsService }             from '../common/utils.service';
import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';
import { TopMenuComponent }         from '../common/top-menu/top-menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
  moduleId: module.id
})

export class LoginComponent implements OnInit {

  private user: User = new User();
  //submitted = false;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private userService: UserService) {}

  ngOnInit(): void {

  }

  @Input()
  set _user(user: User) {
    this.user = user;
  }

  onSubmit(event): void {
    //this.submitted = true;
    this.login(event);
  }

  active = true;

  login(event): void {
    event.stopPropagation();
    this.userService.authenticate(this.user.email, this.user.password)
      .subscribe(response => {
        this.userService.setAuthenticatedUser(response);
        this.router.navigate([ 'users/' + response.id ]);
    });
  }
}
