import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EmailActions from './email.actions';
import { DataService } from '../data.service';

@Injectable()
export class EmailEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}

  updateEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmailActions.updateEmail),
      mergeMap(action =>
        this.dataService.updateUserEmail(action.userid, action.newEmail).pipe(
          map(() => EmailActions.updateEmailSuccess({ userid: action.userid, newEmail: action.newEmail})),
          catchError(error => {
            console.error('Error updating mobile number:', error);
            return of(EmailActions.updateEmailFailure({ error }));
          })
        )
      )
    )
  );
}
