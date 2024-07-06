import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AddressActions from './address.actions';
import { DataService } from '../data.service';

@Injectable()
export class AddressEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}

  // updateAddress$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AddressActions.updateAddress),
  //     mergeMap(action =>
  //       this.dataService.updateUserAddress(action.userid, action.newAddressLine1, action.newAddressLine2, action.newPostalCode, action.newCountry).pipe(
  //         map(() => AddressActions.updateAddressSuccess({ userid: action.userid, newAddressLine1: action.newAddressLine1, newAddressLine2: action.newAddressLine2, newPostalCode: action.newPostalCode, newCountry: action.newCountry})),
  //         catchError(error => {
  //           console.error('Error updating mobile number:', error);
  //           return of(AddressActions.updateAddressFailure({ error }));
  //         })
  //       )
  //     )
  //   )
  // );
  updateAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.updateAddress),
      mergeMap(action =>
        this.dataService.updateUserAddress(action.userid, action.newAddressline1, action.newAddressline2, action.newPostalcode, action.newCountry).pipe(
          map(() => AddressActions.updateAddressSuccess({ userid: action.userid, newAddressline1: action.newAddressline1, newAddressline2: action.newAddressline2, newPostalcode: action.newPostalcode, newCountry: action.newCountry})),
          catchError(error => {
            console.error('Error updating mobile number:', error);
            return of(AddressActions.updateAddressFailure({ error }));
          })
        )
      )
    )
  );
}
