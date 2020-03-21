// selectors
import {createFeatureSelector} from '@ngrx/store';
import {adapter, State} from '../reducers/company.reducers';

export const getCompanyState =  createFeatureSelector<State>('companies');


// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getCompanyState);

// select the array of user ids
export const selectCompanyIds = selectIds;

// select the dictionary of user entities
export const selectCompanyEntities = selectEntities;

// select the array of users
export const selectAllCompanies = selectAll;

// select the total user count
export const selectCompanyTotal = selectTotal;
