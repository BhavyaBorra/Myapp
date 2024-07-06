// import { createReducer, on } from '@ngrx/store';
// import * as UserActions from '../actions/user.actions';

// export interface UserState {
//   user: any;
// }

// export const initialState: UserState = {
//   user: null
// };

// const _userReducer = createReducer(
//   initialState,
//   on(UserActions.loadUserSuccess, (state, { user }) => ({ ...state, user })),
//   on(UserActions.updateUserAddress, (state, { addressline1, addressline2, postalcode, country }) => ({
//     ...state,
//     user: { ...state.user, addressline1, addressline2, postalcode, country }
//   })),
//   on(UserActions.updateUserEmail, (state, { email }) => ({
//     ...state,
//     user: { ...state.user, email }
//   })),
//   on(UserActions.updateUserMobile, (state, { mobilenumber }) => ({
//     ...state,
//     user: { ...state.user, mobilenumber }
//   }))
// );

// export function userReducer(state: UserState = initialState, action: any): UserState {
//   return _userReducer(state, action);
// }