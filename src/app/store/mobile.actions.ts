import { createAction, props } from '@ngrx/store';

export const updateMobileNumber = createAction(
  '[User] Update Mobile Number',
  props<{ userid: string, newMobileNumber: string }>()
);

export const updateMobileNumberSuccess = createAction(
  '[User] Update Mobile Number Success',
  props<{ userid: string, newMobileNumber: string }>()
);

export const updateMobileNumberFailure = createAction(
  '[User] Update Mobile Number Failure',
  props<{ error: any }>()
);
