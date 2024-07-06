import { createAction, props } from '@ngrx/store';

export const uploadFile = createAction(
  '[Upload] Upload File',
  props<{ fileData: any }>()
);

export const uploadFileSuccess = createAction(
  '[Upload] Upload File Success',
  props<{ fileData: any }>()
);

export const uploadFileFailure = createAction(
  '[Upload] Upload File Failure',
  props<{ error: any }>()
);
