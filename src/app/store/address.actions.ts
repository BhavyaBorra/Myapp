import { createAction, props } from '@ngrx/store';

export const updateAddress = createAction(
  '[User] Update Address',
  props<{ userid: string, newAddressline1: string, newAddressline2: string, newPostalcode: string, newCountry: string }>()
);

export const updateAddressSuccess = createAction(
  '[User] Update Address Success',
  props<{ userid: string, newAddressline1: string, newAddressline2: string, newPostalcode: string, newCountry: string }>()
);

export const updateAddressFailure = createAction(
  '[User] Update Address Failure',
  props<{ error: any }>()
);

