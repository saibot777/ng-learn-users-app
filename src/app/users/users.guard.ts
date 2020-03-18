import { Injectable } from "@angular/core";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap, map, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { UsersState } from "./store/users.reducer";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import * as UsersActions from "./store/users.actions";

@Injectable({
  providedIn: "root"
})
export class UsersGuard implements CanActivate {
  constructor(private store: Store<UsersState>, private router: Router) {}

  getUsers(): Observable<any> {
    return this.store.pipe(
      tap(() => {
        this.store.dispatch(UsersActions.loadUsers());
      }),
      map(Actions => !!Actions),
      catchError(() => {
        this.router.navigate(["/404"]);
        return of(false);
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.getUsers().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
