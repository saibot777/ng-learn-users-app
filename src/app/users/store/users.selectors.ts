import { UsersState } from "./users.reducer";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { selectAll } from "./users.reducer";

export const userFeatureSelector = createFeatureSelector<UsersState>("users");

export const getAllUsers = createSelector(userFeatureSelector, selectAll);

export const areUsersLoaded = createSelector(
  userFeatureSelector,
  state => state.usersLoaded
);
