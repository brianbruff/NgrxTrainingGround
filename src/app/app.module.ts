import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserManagementModule} from './user-management/user-management.module';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        UserManagementModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
