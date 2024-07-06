import { createReducer, on } from '@ngrx/store';
import * as EmailActions from './email.actions';

export interface EmailState {
  userid: string;
  email: string;
  error: any;
}

export const initialState: EmailState = {
  userid: '',
  email: '',
  error: null
};

export const emailReducer = createReducer(
  initialState,
  on(EmailActions.updateEmailSuccess, (state, { userid, newEmail }) => ({
    ...state,
    userid,
    email: newEmail,
    error: null
  })),
  on(EmailActions.updateEmailFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
