import { usersActionTypes, usersLoaded } from "./users.actions";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { concatMap, map, tap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../users.service";
import { EMPTY } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersEffects {
  public loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActionTypes.loadUsers),
      concatMap(() => this.usersService.getAllUsers()),
      map(users => usersActionTypes.usersLoaded({ users })),
      // Some ErrorService would be impl here with proper notif flow
      catchError(() => EMPTY)
    )
  );

  public createUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(usersActionTypes.createUser),
        concatMap(action => this.usersService.createUser(action.user)),
        tap(() => this.router.navigateByUrl("/users")),
        catchError(() => EMPTY)
      ),
    { dispatch: false }
  );

  constructor(
    private usersService: UsersService,
    private actions$: Actions,
    private router: Router
  ) {}
}
