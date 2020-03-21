import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';
import {UserModel} from '../models/user.model';
import * as UserActions from '../actions/user.actions';




// Adapter
export function selectUserId(a: UserModel): string {
  return a.id;
}

export function sortByName(a: UserModel, b: UserModel): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>({
  selectId: selectUserId,
  sortComparer: sortByName,
});


// State
export interface State extends EntityState<UserModel> {
  selectedUserId: number | null;
}

const defaultUser = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      name: 'brian'
    }
  },
  selectedUserId: null
}

export const initialState: State = adapter.getInitialState(defaultUser);


const userReducers = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    return adapter.addOne(user, state);
  }),
  on(UserActions.setUser, (state, { user }) => {
    return adapter.setOne(user, state);
  }),
  on(UserActions.upsertUser, (state, { user }) => {
    return adapter.upsertOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return adapter.addMany(users, state);
  }),
  on(UserActions.upsertUsers, (state, { users }) => {
    return adapter.upsertMany(users, state);
  }),
  on(UserActions.updateUser, (state, { user }) => {
    return adapter.updateOne(user, state);
  }),
  on(UserActions.updateUsers, (state, { users }) => {
    return adapter.updateMany(users, state);
  }),
  on(UserActions.mapUsers, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(UserActions.deleteUser, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(UserActions.deleteUsers, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return adapter.addAll(users, state);
  }),
  on(UserActions.clearUsers, state => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  })
);

export function userReducer(state: State | undefined, action: Action) {
  return userReducers(state, action);
}

// selectors
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
