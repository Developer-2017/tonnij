// import {
//     HttpErrorResponse,
//     HttpEvent,
//     HttpHandler,
//     HttpInterceptor,
//     HttpRequest,
//   } from "@angular/common/http";
//   import { Inject, Injectable } from "@angular/core";
//   import { Store } from "@ngrx/store";
//   import * as fromStore from "../store";
//   import { EMPTY, Observable, throwError } from "rxjs";
//   import { catchError, concatMap, map, take } from "rxjs/internal/operators";
//   import { environment } from "src/environments/environment";
//   import { DO_NOT_ADD_TOKEN } from "../core/constants";
//   import { LoginService } from "../core/service/login/login.service";
//   @Injectable({
//     providedIn: "root",
//   })
//   export class BaseHttpInterceptor implements HttpInterceptor {
//     constructor(
//       @Inject("BASE_API_URL") private baseUrl: string,
//       private loginService: LoginService,
//       private store: Store<fromStore.Login>
//     ) {}
//     intercept(
//       req: HttpRequest<any>,
//       next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//       return this.store.select(fromStore.getLoggedInUser).pipe(
//         take(1),
//         concatMap((userProfile) => {
//           let tokenData: string = undefined;
//           if (!req.headers.has(DO_NOT_ADD_TOKEN)) {
//             tokenData = localStorage.getItem("tokenData");
//             if (!tokenData) {
//               this.loginService.logoutUser();
//               return throwError("Token Data not found");
//             }
//           }
//           const apiReq = req.clone({
//             url: `${this.baseUrl}/${req.url}`,
//             headers: req.headers
//               .set("Custom-Key", environment.authToken)
//               .set("Authorization", `Bearer ${tokenData}`)
//               .set(
//                 "user_agent",
//                 "web-" + window.navigator.userAgent.substr(0, 76)
//               )
//               .set(
//                 "created_by",
//                 userProfile?.profile?.company_name ?? "INVALID COMPANY BY UI_WEB"
//               )
//               .set(
//                 "created_by_phone",
//                 userProfile?.profile?.company_phone ??
//                   "INVALID COMPANY PHONE BY UI_WEB"
//               )
//               .set(
//                 "created_by_date_format",
//                 userProfile?.setting?.default_date_format ??
//                   "INVALID DATE BY UI_WEB"
//               )
//               .set(
//                 "created_by_time_format",
//                 userProfile?.setting?.default_time_format ??
//                   "INVALID TIME BY UI_WEB"
//               )
//               .delete(DO_NOT_ADD_TOKEN),
//           });
//           const isDebugModeEnabled = stringToBoolean(
//             localStorage.getItem("DEBUG_MODE_ENABLED")
//           );
//           if (isDebugModeEnabled && !apiReq.url.includes('api/user/masterfeed')) {
//             console.group("URL DETAILS");
//             console.log(`REQUEST_TYPE: ${apiReq.method}`);
//             console.log(`URL : ${apiReq.urlWithParams}`);
//             console.log(`HEADERS : ${JSON.stringify(apiReq.headers)}`);
//             console.log(`REQUEST BODY : ${apiReq.serializeBody()}`);
//             console.groupEnd()
//             var proceed = confirm(`Proceed for ${apiReq.url}`);
//             if (proceed) {
//               return next.handle(apiReq);
//             }
           
//             return EMPTY;
//           } else {
//             return next.handle(apiReq);
//           }
//         })
//       );
//     }
//   }
  
//   function stringToBoolean(string: string) {
//     if(!string){
//       return false
//     }
//     switch (string.toLowerCase().trim()) {
//       case "true":
//       case "yes":
//       case "1":
//         return true;
//       case "false":
//       case "no":
//       case "0":
//       case null:
//         return false;
//       default:
//         return Boolean(string);
//     }
//   }
  