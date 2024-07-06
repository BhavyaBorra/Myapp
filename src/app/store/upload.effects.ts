import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { UploadService } from '../../upload.service';
import * as UploadActions from './upload.actions';
import { DataService } from '../data.service';

@Injectable()
export class UploadEffects {

  uploadFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.uploadFile),
      mergeMap(action => {
        console.log('Upload File action dispatched');
        console.log("inside effects", action.fileData);

        return this.uploadService.uploadFile(action.fileData).pipe(
          map(fileData => UploadActions.uploadFileSuccess({ fileData })),
          catchError(error => {
            console.error('Upload failed', error);
            return of(UploadActions.uploadFileFailure({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private uploadService: DataService
  ) {}
}
