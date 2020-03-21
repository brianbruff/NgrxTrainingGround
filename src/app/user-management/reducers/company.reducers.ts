import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';
import {CompanyModel} from '../models/company.model';
import * as CompanyActions from '../actions/company.actions';




// Adapter
export function selectCompanyId(a: CompanyModel): string {
  return a.id;
}

export function sortByName(a: CompanyModel, b: CompanyModel): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<CompanyModel> = createEntityAdapter<CompanyModel>({
  selectId: selectCompanyId,
  sortComparer: sortByName,
});


// State
export interface State extends EntityState<CompanyModel> {
  selectedCompanyId: number | null;
}

const defaultCompany = {
  ids: ['123'],
  entities: {
    123: {
      id: '123',
      name: 'brian'
    }
  },
  selectedCompanyId: null
}

export const initialState: State = adapter.getInitialState(defaultCompany);


const companyReducers = createReducer(
  initialState,
  on(CompanyActions.addCompany, (state, { company }) => {
    return adapter.addOne(company, state);
  }),
  on(CompanyActions.setCompany, (state, { company }) => {
    return adapter.setOne(company, state);
  }),
  on(CompanyActions.mapCompanies, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(CompanyActions.deleteCompany, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(CompanyActions.deleteCompanies, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(CompanyActions.deleteCompaniesByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(CompanyActions.loadCompanies, (state, { companies }) => {
    return adapter.addAll(companies, state);
  }),
  on(CompanyActions.clearCompanies, state => {
    return adapter.removeAll({ ...state, selectedCompanyId: null });
  })
);

export function companyReducer(state: State | undefined, action: Action) {
  return companyReducers(state, action);
}

