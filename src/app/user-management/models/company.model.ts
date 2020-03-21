import {UserModel} from './user.model';

export interface CompanyModel {
    id: string;
    name: string;
    users: UserModel[];
}
