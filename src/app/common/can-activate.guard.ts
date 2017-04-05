import { CanActivate, Router }  from '@angular/router';
import { Injectable }           from '@angular/core';

import { UserService }          from '../users/user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private userService: UserService,
    protected router: Router) {}

  canActivate(): boolean {
    if (this.userService.getAuthenticatedUser() === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
