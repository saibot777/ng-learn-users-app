import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { usersActionTypes } from "./users.actions";
import { User } from "../user.model";

export interface UsersState extends EntityState<User> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  usersLoaded: false
});

export const userReducer = createReducer(
  initialState,

  on(usersActionTypes.usersLoaded, (state, action) => {
    return adapter.setAll(action.users, { ...state, usersLoaded: true });
  }),

  on(usersActionTypes.createUser, (state, action) => {
    return adapter.addOne(action.user, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
