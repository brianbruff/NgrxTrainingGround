// selectors
import {createFeatureSelector} from '@ngrx/store';
import {adapter, State} from '../reducers/user.reducers';

export const getUserState =  createFeatureSelector<State>('users');


// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getUserState);

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
