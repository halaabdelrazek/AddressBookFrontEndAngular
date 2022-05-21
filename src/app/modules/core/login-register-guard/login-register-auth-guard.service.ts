
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterAuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isLoggedIn()) return true;

    this.router.navigate(['/home']);
    return false;
  }
}
