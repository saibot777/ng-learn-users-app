import { createAction, props } from "@ngrx/store";
import { User } from "../user.model";

export const loadUsers = createAction("[Users] Load All Users");

export const usersLoaded = createAction(
  "[Users] Users Loaded Successfully",
  props<{ users: User[] }>()
);

export const createUser = createAction(
  "[Users] Create User",
  props<{ user: User }>()
);

export const usersActionTypes = {
  loadUsers,
  usersLoaded,
  createUser
};
