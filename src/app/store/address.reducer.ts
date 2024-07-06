import { createReducer, on } from '@ngrx/store';
import * as AddressActions from './address.actions';

export interface AddressState {
  userid: string;
  addressline1: string;
  addressline2: string;
  postalcode: string;
  country: string;
  error: any;
}

export const initialState: AddressState = {
  userid: '',
  addressline1: '',
  addressline2: '',
  postalcode: '',
  country: '',
  error: null
};

export const addressReducer = createReducer(
  initialState,
  on(AddressActions.updateAddressSuccess, (state, { userid, newAddressline1, newAddressline2, newPostalcode, newCountry }) => ({
    ...state,
    userid,
    addressline1: newAddressline1,
    addressline2: newAddressline2,
    postalcode: newPostalcode,
    country: newCountry,
    error: null
  })),
  on(AddressActions.updateAddressFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
