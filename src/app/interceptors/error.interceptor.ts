// import {
//     HttpErrorResponse,
//     HttpEvent,
//     HttpHandler,
//     HttpInterceptor,
//     HttpRequest,
//     HttpResponse,
//   } from "@angular/common/http";
//   import { Injectable } from "@angular/core";
//   import { Observable, throwError } from "rxjs";
//   import { catchError, map } from "rxjs/internal/operators";
//   import { BaseResponseModel } from "../core/data-model/base_response.model";
//   import { ToastrService } from "ngx-toastr";
//   import { LoginService } from "../core/service/login/login.service";
  
//   @Injectable({
//     providedIn: "root",
//   })
//   export class ErrorInterceptor implements HttpInterceptor {
//     constructor(
//       private toastService: ToastrService,
//       private loginService: LoginService
//     ) {}
//     intercept(
//       req: HttpRequest<any>,
//       next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//       return next.handle(req).pipe(
//         map((event: HttpEvent<any>) => {
//           if (event instanceof HttpResponse) {
//             let baseResponseModel: BaseResponseModel = event.body as BaseResponseModel;
//             if (
//               baseResponseModel.doLogOut &&
//               baseResponseModel.doLogOut === true
//             ) {
//               this.loginService.logoutUser();
//               throw new HttpErrorResponse({
//                 error:
//                   (baseResponseModel.responseMsg.isError
//                     ? baseResponseModel.responseMsg.errorMessage
//                     : baseResponseModel.responseMsg.isWarning
//                     ? baseResponseModel.responseMsg.warningMessage
//                     : undefined) ?? "You have been logged out of the app",
//                 headers: event.headers,
//                 status: 500,
//                 statusText: "Error",
//                 url: event.url,
//               });
//             }
//             if (baseResponseModel.responseMsg) {
//               if (
//                 baseResponseModel.responseMsg.isError ||
//                 baseResponseModel.responseMsg.isWarning
//               ) {
//                 throw new HttpErrorResponse({
//                   error: baseResponseModel.responseMsg.isError
//                     ? baseResponseModel.responseMsg.errorMessage
//                     : baseResponseModel.responseMsg.isWarning
//                     ? baseResponseModel.responseMsg.warningMessage
//                     : "Please contact app administrator",
//                   headers: event.headers,
//                   status: 500,
//                   statusText: "Error",
//                   url: event.url,
//                 });
//               }
//               if (baseResponseModel.responseMsg.successMessage) {
//                 this.toastService.success(
//                   baseResponseModel.responseMsg.successMessage
//                 );
//               }
//             }
//             return event;
//           }
//         }),
//         catchError((error: HttpErrorResponse) => {
//           this.toastService.error(error.error);
//           return throwError(error.error);
//         })
//       );
//     }
//   }
  