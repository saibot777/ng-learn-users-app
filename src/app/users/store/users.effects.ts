import { usersActionTypes, usersLoaded } from "./users.actions";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../users.service";

@Injectable({
  providedIn: "root"
})
export class UsersEffects {
  public loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActionTypes.loadUsers),
      concatMap(() => this.usersService.getAllUsers()),
      map(users => usersActionTypes.usersLoaded({ users }))
    )
  );

  public createUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(usersActionTypes.createUser),
        concatMap(action => this.usersService.createUser(action.user)),
        tap(() => this.router.navigateByUrl("/users"))
      ),
    { dispatch: false }
  );

  constructor(
    private usersService: UsersService,
    private actions$: Actions,
    private router: Router
  ) {}
}
