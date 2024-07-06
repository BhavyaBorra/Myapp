// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
// import { UserService } from '../../services/user.service';
// import * as UserActions from '../actions/user.actions';
// import { Store } from '@ngrx/store';
// import { UserState } from '../reducers/user.reducer';

// @Injectable()
// export class UserEffects {

//   constructor(
//     private actions$: Actions,
//     private userService: UserService,
//     private store: Store<{ user: UserState }>
//   ) {}

//   loadUser$ = createEffect(() => this.actions$.pipe(
//     ofType(UserActions.loadUser),
//     mergeMap(action => this.userService.getUserByuserid(action.userid)
//       .pipe(
//         map(user => UserActions.loadUserSuccess({ user })),
//         catchError(() => of({ type: '[User] Load User Failure' }))
//       ))
//   ));

//   updateUserAddress$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.updateUserAddress),
//       withLatestFrom(this.store.select(state => state.user.user)),
//       mergeMap(([action, user]) =>
//         this.userService.updateUser({ ...user, ...action }).pipe(
//           map(updatedUser => UserActions.loadUserSuccess({ user: updatedUser })),
//           catchError(() => of({ type: '[User] Update User Address Failed' }))
//         )
//       )
//     )
//   );

//   updateUserEmail$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.updateUserEmail),
//       withLatestFrom(this.store.select(state => state.user.user)),
//       mergeMap(([action, user]) =>
//         this.userService.updateUser({ ...user, ...action }).pipe(
//           map(updatedUser => UserActions.loadUserSuccess({ user: updatedUser })),
//           catchError(() => of({ type: '[User] Update User Email Failed' }))
//         )
//       )
//     )
//   );

//   updateUserMobile$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserActions.updateUserMobile),
//       withLatestFrom(this.store.select(state => state.user.user)),
//       mergeMap(([action, user]) =>
//         this.userService.updateUser({ ...user, ...action }).pipe(
//           map(updatedUser => UserActions.loadUserSuccess({ user: updatedUser })),
//           catchError(() => of({ type: '[User] Update User Mobile Failed' }))
//         )
//       )
//     )
//   );

// }
