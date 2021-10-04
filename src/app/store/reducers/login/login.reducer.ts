// import { UPDATE_USER_SETTINGS } from "src/app/constants";
import { AppUser } from "src/app/core/data-model/AppUser/app_user.model";
import {
  GET_USER_DOCUMENTS_FROM_USER_ID_SUCCESS,
  INCREMENT_CUSTOMER_COUNT,
  INCREMENT_DRIVER_COUNT,
  INCREMENT_TRAILER_COUNT,
  INCREMENT_TRUCK_COUNT,
  INCREMENT_VENDOR_COUNT,
  UPDATE_COMPANY_PROFILE_SUCCESS,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPLOAD_USER_DOCUMENTS,
  UPLOAD_USER_DOCUMENTS_SUCCESS,
  UserActions,
  UserLoginActionTypes,
} from "../../actions/login/login.action";

export interface UserProfileState {
  user: AppUser;
  loggedIn: boolean;
  errorMessage: string;
  hasError: boolean;
}
const initialState: UserProfileState = {
  user: {},
  loggedIn: false,
  hasError: false,
  errorMessage: '',
};
export function authReducer(
  state = initialState,
  action: UserActions
): UserProfileState {
  switch (action.type) {
    case UserLoginActionTypes.USER_LOGIN:
      return {
        ...state,
        hasError: false,
        errorMessage: '',
      };
    case UserLoginActionTypes.USER_LOGIN_COMPLETE:
      return {
        ...state,
        user: {
          ...action.payload,
          document: {
            ...action.payload.document,
            is_actual_data: false,
          },
        },
        errorMessage: '',
        hasError: false,
        loggedIn: true,
      };
    case UserLoginActionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
       user: {},
        hasError: true,
        loggedIn: false,
        errorMessage: action.payload,
      };
    case UPDATE_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload,
        },
      };
    case UPDATE_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          setting: action.payload,
          defaultFormat: {
            ...state.user.defaultFormat,
            dateFormat: action.payload.default_date_format,
            timeFormat: action.payload.default_time_format,
          },
        },
      };
    case GET_USER_DOCUMENTS_FROM_USER_ID_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          document: { ...action.payload, is_actual_data: true },
        },
      };

    case UPLOAD_USER_DOCUMENTS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          document: { ...action.payload, is_actual_data: false },
        },
      };

    case INCREMENT_CUSTOMER_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          customers: (state.user.customers ?? 0) + 1,
        },
      };
    case INCREMENT_DRIVER_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          drivers: (state.user.drivers ?? 0) + 1,
        },
      };
    case INCREMENT_TRAILER_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          trailers: (state.user.trailers ?? 0) + 1,
        },
      };
    case INCREMENT_TRUCK_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          trucks: (state.user.trucks ?? 0) + 1,
        },
      };
    case INCREMENT_VENDOR_COUNT:
      return {
        ...state,
        user: {
          ...state.user,
          vendors: (state.user.vendors ?? 0) + 1,
        },
      };

    
    default:
      return state;
  }
}
export const getLoggedIn = (state: UserProfileState) => state.loggedIn;
export const selectUser = (state: UserProfileState) => state.user;
export const selectCompanyProfile = (state: UserProfileState) =>
  state.user?.profile;
export const selectCompanyDocuments = (state: UserProfileState) =>
  state.user?.document;
export const selectUserSettings = (state: UserProfileState) =>
  state.user?.setting;
export const selectDefaultEquipements = (state: UserProfileState) =>
  state.user?.defaultFormat?.equipments;
export const selectDefaultFormats = (state: UserProfileState) =>
  state.user?.defaultFormat;

export const getUserBearerTokenData = (state: UserProfileState) =>
  state.user.tokenData;
export const errorMessage = (state: UserProfileState) => state.errorMessage;
export const hasError = (state: UserProfileState) => state.hasError;
