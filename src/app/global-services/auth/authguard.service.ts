import { Injectable  } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService) { }

  canActivate() {

    if (!this._authService.isTokenExpired()) {
        return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}