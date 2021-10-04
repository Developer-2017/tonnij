import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { merge, Observable, of } from "rxjs";
import {
  catchError,
  delay,
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from "rxjs/internal/operators";
import * as fromStore from "../../../store";
import { LoginService } from "src/app/core/service/login/login.service";
import * as fromUserActions from "../../actions/login/login.action";
import { DocumentStatus } from '../../../core/data-model/enums/tonnij_enums';
import { Document } from "src/app/core/data-model/AppUser/app_user.model";
import { TokenData } from "src/app/core/data-model/AppUser/app_user.model";
import { AppUser } from "src/app/core/data-model/AppUser/app_user.model";
@Injectable({
  providedIn: "root",
})
export class UserLoginEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromStore.UserProfileState>,
    private userLoginService: LoginService
  ) {}
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType<fromUserActions.Login>(
      fromUserActions.UserLoginActionTypes.USER_LOGIN
    ),

    mergeMap((action) =>
      this.userLoginService.loginUser(action.payload).pipe(
        delay(500),
        map(
          (res) =>
            {
              if(res && res.user && res.user.role_id && (res.user.role_id===100 || res.user.role_id===101)){
              return new fromUserActions.LoginComplete(
                res,
                action.rememberMe,
                action.shouldNavigate
              )
              }else{
                throw "You are not allowed to login"
              }
            }
        ),
        catchError((err) => of(new fromUserActions.LoginError(err)))
      )
    )
  );
  @Effect()
  successLogin$ = this.actions$.pipe(
    ofType<fromUserActions.LoginComplete>(
      fromUserActions.UserLoginActionTypes.USER_LOGIN_COMPLETE
    ),
    tap((data) => {
      localStorage.setItem(
        "userSettings",
        JSON.stringify(data.payload.setting)
      );
      localStorage.setItem("tokenData", `${data.payload.tokenData?.token}`);
      localStorage.setItem("userID", `${data.payload.user?.user_id}`);
      localStorage.setItem("password", `${data.payload.user?.user_pass_elm}`);
      localStorage.setItem("email", `${data.payload.user?.user_login_elm}`);
      localStorage.setItem("company_name", `${data.payload.profile?.company_name}`);
      if(data.payload.user?.role_id){
      localStorage.setItem("role_id",data.payload.user.role_id.toString());
      }
      // this.onesignalService.setExternalId(data.payload.user.guid)
      if (data.rememberMe) {
        localStorage.setItem("remember_me", "true");
      }
    }),
    tap((a) => {
     
      if (a.shouldNavigate) {
        if (a.payload.user?.role_id === 100) {
          this.router.navigateByUrl("/admin/dashboard", { replaceUrl: true });
        } else {
          this.router.navigateByUrl("/dashboard/main", { replaceUrl: true });
        }
      }
    }),
  //   switchMap(data=>[
  //     new fromStore.GetMasterFeedData()
  //   ])
  // )
  )}