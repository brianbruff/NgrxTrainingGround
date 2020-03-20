import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { CompaniesComponent } from './companies/companies.component';
import { UsersComponent } from './users/users.component';
import { WorkgroupsComponent } from './workgroups/workgroups.component';
import { PoliciesComponent } from './policies/policies.component';



@NgModule({
    declarations: [UserManagementPageComponent, CompaniesComponent, UsersComponent, WorkgroupsComponent, PoliciesComponent],
    exports: [
        UserManagementPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UserManagementModule { }
