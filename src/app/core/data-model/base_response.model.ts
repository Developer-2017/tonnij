import { AppUser, Document, Setting, User } from "./AppUser/app_user.model";


export interface BaseResponseModel {
  doLogOut?: boolean;
  languageCode?: string;
  responseData?: ResponseData;
  responseMsg?: ResponseMsg;
}

export interface ResponseData {
  data?:
    | User
    | AppUser
    | Document
    | Setting
  isObject?: boolean;
  isCollection?: boolean;
  responseDataType?: string;
}

export interface ResponseMsg {
  isError?:           boolean;
  errorMessage?:      string;
  isWarning?:         boolean;
  warningMessage?:    string;
  isEmptyCollection?: boolean;
  successMessage?:    string;
  exceptionModel?:    null;
}
