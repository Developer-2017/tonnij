import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { from, Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { AppUser, Profile, Setting, User } from "../../data-model/AppUser/app_user.model";
import { BaseResponseModel } from "../../../core/data-model/base_response.model";
import { UserLoginRequest } from "../../data-model/HttpRequest/user_login_request.model";
import * as fromApiConstants from "../../constants";
import * as fromStore from '../../../store'
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient,private router:Router) {}

  loginUser(userLoginRequest: UserLoginRequest): Observable<AppUser> {
    return this.http
      .post<BaseResponseModel>(
        fromApiConstants.AUTHENTICATE_USER,
        {...userLoginRequest,player_id:'ABC'},
        {
          headers: {
            [fromApiConstants.DO_NOT_ADD_TOKEN]: "true",
          },
        }
      )
      .pipe(
        map((data) => {
          return data.responseData?.data as AppUser;
        })
      );
  }
  
  // loginUser(userLoginRequest: UserLoginRequest): Observable<AppUser> {
  //   return this.http
  //     .post<BaseResponseModel>(
  //       fromApiConstants.AUTHENTICATE_USER,
  //       {...userLoginRequest,player_id:this.onesignalService.oneSignalId},
  //       {
  //         headers: {
  //           [fromApiConstants.DO_NOT_ADD_TOKEN]: "true",
  //         },
  //       }
  //     )
  //     .pipe(
  //       map((data) => {
  //         return data.responseData?.data as AppUser;
  //       })
  //     );
  // }
  // logoutUser(){
  //   this.store.dispatch(fromStore.clearStateONLogout());
  //   localStorage.clear();
  //   this.store.dispatch(new fromStore.StopListeningLiveNotifications())
  //   this.router.navigate([''],{replaceUrl:true})
  // }
}
