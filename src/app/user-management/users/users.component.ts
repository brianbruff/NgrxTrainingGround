import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {Store} from "@ngrx/store";
import * as fromUsers from '../reducers/user.reducers';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$ : Observable<UserModel[]>;

  constructor(private store: Store<fromUsers.State>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(fromUsers.selectAllUsers)
  }


  createUser() {
    const id = new Date().getUTCMilliseconds().toString()
    const user: UserModel = {
      id,
      name: 'test' + id
    }

    this.store.dispatch(userActions.addUser({user: user}))


  }
}
