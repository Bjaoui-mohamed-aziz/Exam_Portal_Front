import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot ,UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {

  constructor(private login: LoginService, private router:Router) 
  {

  }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.login.isLoggedIn() && this.login.getUserRole()=='Normal')
      {
      
            return true }
          
      this.router.navigate(['/home']);      
      return false }


    }