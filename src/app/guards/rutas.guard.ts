import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements CanActivate {
  
  constructor(private login: LoginService, 
              private router: Router,
              private toastr: ToastrService) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
      if(this.login.GetUser()){
        return true;
      } else {
        this.toastr.error('Pagina protegida, te mandamos a nuestra pagina principal');
        this.router.navigate(['principal']);
        return false;
      }
  }
  
}
