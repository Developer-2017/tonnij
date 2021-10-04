import { Action, createAction } from "@ngrx/store";
import {
  AppUser,
  Document,
  Profile,
  Setting,
  User,
} from "../../../core/data-model/AppUser/app_user.model";
import { UserLoginRequest } from "src/app/core/data-model/HttpRequest/user_login_request.model";
// import { UserRegistrationRequest } from "src/app/data/http_requests/user_registration_request.model";
import { LoadingAction } from "src/app/shared/directives/loading";
export enum UserLoginActionTypes {
  USER_LOGIN = "[User] LOGIN",
  USER_LOGIN_COMPLETE = "[User] LOGIN_COMPLETE",
  USER_LOGIN_ERROR = "[User] LOGIN_ERROR",
  USER_REGISTRATION = "[User] USER_REGISTRATION",
  USER_REGISTRATION_SUCCESS = "[User] USER_REGISTRATION_SUCCESS",
  USER_REGISTRATION_FAILURE = "[User] USER_REGISTRATION_FAILURE",
}

export const UPDATE_COMPANY_PROFILE = "UPDATE_COMPANY_PROFILE";
export const UPDATE_COMPANY_PROFILE_SUCCESS = "UPDATE_COMPANY_PROFILE SUCCESS";
export const UPDATE_COMPANY_PROFILE_FAIL = "UPDATE_COMPANY_PROFILE FAIL";

export const UPDATE_USER_SETTINGS = "UPDATE_USER_SETTINGS";
export const UPDATE_USER_SETTINGS_SUCCESS = "UPDATE_USER_SETTINGS SUCCESS";
export const UPDATE_USER_SETTINGS_FAIL = "UPDATE_USER_SETTINGS FAIL";

export class UpdateUserSettings implements Action, LoadingAction {
  tonnijLoading = { add: UPDATE_USER_SETTINGS };
  readonly type = UPDATE_USER_SETTINGS;
  constructor(public payload: Setting) {}
}

export class UpdateUserSettingsSuccess implements Action, LoadingAction {
  tonnijLoading = { remove: UPDATE_USER_SETTINGS };

  readonly type = UPDATE_USER_SETTINGS_SUCCESS;
  constructor(public payload: Setting) {}
}

export class UpdateUserSettingsFail implements Action, LoadingAction {
  tonnijLoading = { remove: UPDATE_USER_SETTINGS };

  readonly type = UPDATE_USER_SETTINGS_FAIL;
  constructor(public payload: string) {}
}

export class UpdateCompanyProfile implements Action, LoadingAction {
  tonnijLoading = { add: UPDATE_COMPANY_PROFILE };
  readonly type = UPDATE_COMPANY_PROFILE;
  constructor(public userCompanyRequest: Profile) {}
}

export class UpdateCompanyProfileSuccess implements Action, LoadingAction {
  tonnijLoading = { remove: UPDATE_COMPANY_PROFILE };
  readonly type = UPDATE_COMPANY_PROFILE_SUCCESS;
  constructor(public payload: Profile) {}
}

export class UpdateCompanyProfileFail implements Action, LoadingAction {
  tonnijLoading = { remove: UPDATE_COMPANY_PROFILE };
  readonly type = UPDATE_COMPANY_PROFILE_FAIL;
  constructor(public payload: string) {}
}

export class Login implements Action, LoadingAction {
  tonnijLoading = { add: UserLoginActionTypes.USER_LOGIN };
  readonly type = UserLoginActionTypes.USER_LOGIN;
  constructor(
    public payload: UserLoginRequest,
    public rememberMe: boolean,
    public shouldNavigate: boolean = true
  ) {}
}
export class LoginComplete implements Action, LoadingAction {
  tonnijLoading = { remove: UserLoginActionTypes.USER_LOGIN };
  readonly type = UserLoginActionTypes.USER_LOGIN_COMPLETE;
  constructor(
    public payload: AppUser,
    public rememberMe: boolean,
    public shouldNavigate: boolean
  ) {}
}
export class LoginError implements Action, LoadingAction {
  tonnijLoading = { remove: UserLoginActionTypes.USER_LOGIN };
  readonly type = UserLoginActionTypes.USER_LOGIN_ERROR;
  constructor(public payload: string) {}
}
// export class Register implements Action, LoadingAction {
//   tonnijLoading = { add: UserLoginActionTypes.USER_REGISTRATION };
//   readonly type = UserLoginActionTypes.USER_REGISTRATION;
//   constructor(public payload: UserRegistrationRequest) {}
// }
export class RegisterSuccess implements Action, LoadingAction {
  tonnijLoading = { remove: UserLoginActionTypes.USER_REGISTRATION };
  readonly type = UserLoginActionTypes.USER_REGISTRATION_SUCCESS;
  constructor(public payload: User) {}
}
export class RegisterFailure implements Action, LoadingAction {
  tonnijLoading = { remove: UserLoginActionTypes.USER_REGISTRATION };
  readonly type = UserLoginActionTypes.USER_REGISTRATION_FAILURE;
  constructor(public payload: string) {}
}

export const GET_USER_DOCUMENTS_FROM_USER_ID =
  "GET_USER_DOCUMENTS_FROM_USER_ID";
export const GET_USER_DOCUMENTS_FROM_USER_ID_SUCCESS =
  "GET_USER_DOCUMENTS_FROM_USER_ID SUCCESS";
export const GET_USER_DOCUMENTS_FROM_USER_ID_FAIL =
  "GET_USER_DOCUMENTS_FROM_USER_ID FAIL";

export class GetUserDocumentsFromDocumentId implements Action {
  readonly type = GET_USER_DOCUMENTS_FROM_USER_ID;
  constructor(public userId?: number) {}
}

export class GetUserDocumentsFromDocumentIdSuccess implements Action {
  readonly type = GET_USER_DOCUMENTS_FROM_USER_ID_SUCCESS;
  constructor(public payload: Document) {}
}

export class GetUserDocumentsFromDocumentIdFail implements Action {
  readonly type = GET_USER_DOCUMENTS_FROM_USER_ID_FAIL;
  constructor(public payload: string) {}
}

export const UPLOAD_USER_DOCUMENTS = "UPLOAD_USER_DOCUMENTS";
export const UPLOAD_USER_DOCUMENTS_SUCCESS = "UPLOAD_USER_DOCUMENTS SUCCESS";
export const UPLOAD_USER_DOCUMENTS_FAIL = "UPLOAD_USER_DOCUMENTS FAIL";

export class UploadUserDocuments implements Action, LoadingAction {
  tonnijLoading = { add: UPLOAD_USER_DOCUMENTS };
  readonly type = UPLOAD_USER_DOCUMENTS;
  constructor(public payload: Document, public isRejected: boolean) {}
}

export class UploadUserDocumentsSuccess implements Action, LoadingAction {
  tonnijLoading = { remove: UPLOAD_USER_DOCUMENTS };
  readonly type = UPLOAD_USER_DOCUMENTS_SUCCESS;
  constructor(public payload: Document) {}
}

export class UploadUserDocumentsFail implements Action, LoadingAction {
  tonnijLoading = { remove: UPLOAD_USER_DOCUMENTS };
  readonly type = UPLOAD_USER_DOCUMENTS_FAIL;
  constructor(public payload: string) {}
}

export const INCREMENT_TRUCK_COUNT = "INCREMENT_TRUCK_COUNT";
export const INCREMENT_VENDOR_COUNT = "INCREMENT_VENDOR_COUNT";
export const INCREMENT_CUSTOMER_COUNT = "INCREMENT_CUSTOMER_COUNT";
export const INCREMENT_DRIVER_COUNT = "INCREMENT_DRIVER_COUNT";
export const INCREMENT_TRAILER_COUNT = "INCREMENT_TRAILER_COUNT";

export class IncrementTruckCount implements Action {
  readonly type = INCREMENT_TRUCK_COUNT;
  constructor() {}
}

export class IncrementVendorCount implements Action {
  readonly type = INCREMENT_VENDOR_COUNT;
  constructor() {}
}

export class IncrementTrailerCount implements Action {
  readonly type = INCREMENT_TRAILER_COUNT;
  constructor() {}
}

export class IncrementDriverCount implements Action {
  readonly type = INCREMENT_DRIVER_COUNT;
  constructor() {}
}

export class IncrementCustomerCount implements Action {
  readonly type = INCREMENT_CUSTOMER_COUNT;
  constructor() {}
}


export const clearStateONLogout = createAction(
  '[Users] logout request'
);


export type UserActions =
  | IncrementCustomerCount
  | IncrementDriverCount
  | IncrementTrailerCount
  | IncrementVendorCount
  | IncrementTruckCount
  | UploadUserDocuments
  | UploadUserDocumentsSuccess
  | UploadUserDocumentsFail
  | GetUserDocumentsFromDocumentId
  | GetUserDocumentsFromDocumentIdSuccess
  | GetUserDocumentsFromDocumentIdFail
  | Login
  | LoginComplete
  | UpdateCompanyProfile
  | UpdateCompanyProfileFail
  | UpdateCompanyProfileSuccess
  | LoginError
  | UpdateUserSettings
  | UpdateUserSettingsSuccess
  | UpdateUserSettingsFail
  // | Register
  | RegisterSuccess
  | RegisterFailure;
