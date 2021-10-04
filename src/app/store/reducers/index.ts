import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  INIT,
  MetaReducer
} from '@ngrx/store';
import * as fromLogin from './login';

import { environment } from '../../../environments/environment';
import * as fromValidateUserActions from '../actions/login';

export interface State {
  userAuthorizationState:fromLogin.UserProfileState,
}

export const reducers: ActionReducerMap<State , any> = {
   userAuthorizationState : fromLogin.authReducer
};


export const selectUserAuthState = (state: State) => state.userAuthorizationState;



export const getLoggedInStatus = createSelector(selectUserAuthState,fromLogin.getLoggedIn)
export const getDefaultFormats = createSelector(selectUserAuthState,fromLogin.selectDefaultFormats)

export const getUserEquipements = createSelector(selectUserAuthState,fromLogin.selectDefaultEquipements)



export const getLoggedInUser = createSelector(selectUserAuthState,fromLogin.selectUser)
export const getLoggedInUserCompanyProfile = createSelector(selectUserAuthState,fromLogin.selectCompanyProfile)
export const getLoggedInUserCompanyDocuments = createSelector(selectUserAuthState,fromLogin.selectCompanyDocuments)
export const getLoggedInUserSettinngs = createSelector(selectUserAuthState,fromLogin.selectUserSettings)
export const getLoggedInUserTokenData = createSelector(selectUserAuthState,fromLogin.getUserBearerTokenData)


// export const getMasterFeedData = createSelector(selectUserValidateState,fromAuthorization.selectMasterFeedData)


// export function clearState(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state:  State,  action: Action): State {
//     if (action &&  action != null && action.type === fromValidateUserActions.clearStateONLogout.type) {
//       return reducer( undefined, {type: INIT});
//     }
//     return reducer(state, action);
//   };
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [clearState] : [clearState];
export * from './login';