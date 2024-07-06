import { createReducer, on } from '@ngrx/store';
import * as UploadActions from './upload.actions';

export interface UploadState {
  fileData: any;
  error: any;
}

export const initialState: UploadState = {
  fileData: null,
  error: null
};

export const uploadReducer = createReducer(
  initialState,
  on(UploadActions.uploadFileSuccess, (state, { fileData }) => ({ ...state, fileData })),
  on(UploadActions.uploadFileFailure, (state, { error }) => ({ ...state, error }))
);
