import {ActionReducerMap} from "@ngrx/store/src/models";
import {UserReducer} from "../user-management/reducers/user.reducers";


export const reducers: ActionReducerMap<any> = {
  users: UserReducer
}
