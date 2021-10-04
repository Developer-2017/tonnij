import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { LoginService } from '../service/login/login.service';
import * as fromStore from '../../store';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private store:Store<fromStore.UserProfileState>,private router:Router,private loginService:LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userName = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if(!userName || !password){
      // this.loginService.logoutUser();
      return false;
    }
    return this.getUserAuthenticationState(userName,password).pipe(
      switchMap(()=>of(true)),
      catchError(()=>{
        // this.loginService.logoutUser();
        return of(false)})
    )
  }

  private getUserAuthenticationState(userID:string,password:string){
    return this.store.pipe(select(fromStore.getLoggedIn)).pipe(
      tap(data=>{
        if(!data){
        this.authenticateUser(userID,password)
        }
      }),
      filter(data=>!!data),
      take(1)
    )
  }

  private authenticateUser(userID:string,password:string){
    this.store.dispatch(new fromStore.Login({
      user_login_elm:userID,
      user_pass_elm:password,


    },localStorage.getItem('remember_me')==='true',false))
  }
  
}
