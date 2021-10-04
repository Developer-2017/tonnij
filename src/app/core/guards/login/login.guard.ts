import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../../service/login/login.service";
@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router, 
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userName = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("remember_me");
    const role_id = localStorage.getItem("role_id");
    if (userName && password && rememberMe && role_id) {
      if (+role_id === 100) {
        this.router.navigateByUrl("/admin/dashboard", { replaceUrl: true });

      } else {
        this.router.navigate(["dashboard/main"], { replaceUrl: true });
      }
      return false;
    }
    localStorage.clear();
    return true;
  }
}

