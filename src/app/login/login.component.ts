import { Component, OnInit }        from '@angular/core';

import { Router }                   from '@angular/router';

import { UtilsService }             from '../common/utils.service';
import { User }                     from '../users/user';
import { UserService }              from '../users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  moduleId: module.id
})

export class LoginComponent implements OnInit {

  private user: User = new User();
  submitted = false;

  constructor(
    private router: Router,
    private utils: UtilsService,
    private userService: UserService) {}

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.submitted = true;
    this.login(null);
  }

  active = true;

  login(event): void {
    this.userService.authenticate(this.user.email, this.user.password)
      .subscribe(response => {
        this.userService.setAuthenticatedUser(response);
        this.router.navigate([ 'users/' + response.id ]);
    });
  }
}






















