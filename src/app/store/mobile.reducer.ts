import { createReducer, on } from '@ngrx/store';
import * as MobileActions from './mobile.actions';

export interface MobileState {
  userid: string;
  mobileNumber: string;
  error: any;
}

export const initialState: MobileState = {
  userid: '',
  mobileNumber: '',
  error: null
};

export const mobileReducer = createReducer(
  initialState,
  on(MobileActions.updateMobileNumberSuccess, (state, { userid, newMobileNumber }) => ({
    ...state,
    userid,
    mobileNumber: newMobileNumber,
    error: null
  })),
  on(MobileActions.updateMobileNumberFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
