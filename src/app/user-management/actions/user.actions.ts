import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';

import {UserModel} from '../models/user.model';



export const loadUsers = createAction('[UserModel/API] Load Users', props<{ users: UserModel[] }>());
export const addUser = createAction('[UserModel/API] Add UserModel', props<{ user: UserModel }>());
export const setUser = createAction('[UserModel/API] Set UserModel', props<{ user: UserModel }>());
export const upsertUser = createAction('[UserModel/API] Upsert UserModel', props<{ user: UserModel }>());
export const addUsers = createAction('[UserModel/API] Add Users', props<{ users: UserModel[] }>());
export const upsertUsers = createAction('[UserModel/API] Upsert Users', props<{ users: UserModel[] }>());
export const updateUser = createAction('[UserModel/API] Update UserModel', props<{ user: Update<UserModel> }>());
export const updateUsers = createAction('[UserModel/API] Update Users', props<{ users: Update<UserModel>[] }>());
export const mapUsers = createAction('[UserModel/API] Map Users', props<{ entityMap: EntityMap<UserModel> }>());
export const deleteUser = createAction('[UserModel/API] Delete UserModel', props<{ id: string }>());
export const deleteUsers = createAction('[UserModel/API] Delete Users', props<{ ids: string[] }>());
export const deleteUsersByPredicate = createAction(
  '[UserModel/API] Delete Users By Predicate', props<{ predicate: Predicate<UserModel> }>());
export const clearUsers = createAction('[UserModel/API] Clear Users');



