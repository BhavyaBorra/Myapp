import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MobileActions from './mobile.actions';
import { DataService } from '../data.service';

@Injectable()
export class MobileEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}

  updateMobileNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MobileActions.updateMobileNumber),
      mergeMap(action =>
        this.dataService.updateUserMobileNumber(action.userid, action.newMobileNumber).pipe(
          map(() => MobileActions.updateMobileNumberSuccess({ userid: action.userid, newMobileNumber: action.newMobileNumber })),
          catchError(error => {
            console.error('Error updating mobile number:', error);
            return of(MobileActions.updateMobileNumberFailure({ error }));
          })
        )
      )
    )
  );
}
