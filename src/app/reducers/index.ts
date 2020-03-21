import {ActionReducerMap} from '@ngrx/store/src/models';
import {userReducer} from '../user-management/reducers/user.reducers';
import {companyReducer} from '../user-management/reducers/company.reducers';


export const reducers: ActionReducerMap<any> = {
  users: userReducer,
  companies: companyReducer
};
