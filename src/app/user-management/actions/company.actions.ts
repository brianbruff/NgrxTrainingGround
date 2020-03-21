import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';
import {CompanyModel} from '../models/Company.model';



export const loadCompanies = createAction('[CompanyModel/API] Load Companies', props<{ companies: CompanyModel[] }>());
export const addCompany = createAction('[CompanyModel/API] Add CompanyModel', props<{ company: CompanyModel }>());
export const setCompany = createAction('[CompanyModel/API] Set CompanyModel', props<{ company: CompanyModel }>());
export const upsertCompany = createAction('[CompanyModel/API] Upsert CompanyModel', props<{ company: CompanyModel }>());
export const addCompanies = createAction('[CompanyModel/API] Add Companies', props<{ companies: CompanyModel[] }>());
export const upsertCompanies = createAction('[CompanyModel/API] Upsert Companies', props<{ companies: CompanyModel[] }>());
export const updateCompany = createAction('[CompanyModel/API] Update CompanyModel', props<{ company: Update<CompanyModel> }>());
export const updateCompanies = createAction('[CompanyModel/API] Update Companies', props<{ companies: Update<CompanyModel>[] }>());
export const mapCompanies = createAction('[CompanyModel/API] Map Companies', props<{ entityMap: EntityMap<CompanyModel> }>());
export const deleteCompany = createAction('[CompanyModel/API] Delete CompanyModel', props<{ id: string }>());
export const deleteCompanies = createAction('[CompanyModel/API] Delete Companies', props<{ ids: string[] }>());
export const deleteCompaniesByPredicate = createAction(
  '[CompanyModel/API] Delete Companyies By Predicate', props<{ predicate: Predicate<CompanyModel> }>());
export const clearCompanies = createAction('[CompanyModel/API] Clear Companies');



