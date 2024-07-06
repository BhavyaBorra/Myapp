import { createAction, props } from '@ngrx/store';

export const updateEmail = createAction(
  '[User] Update Email',
  props<{ userid: string, newEmail: string }>()
);

export const updateEmailSuccess = createAction(
  '[User] Update Email Success',
  props<{ userid: string, newEmail: string }>()
);

export const updateEmailFailure = createAction(
  '[User] Update Email Failure',
  props<{ error: any }>()
);
