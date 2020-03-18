import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/libs/core/base.component";
import { Observable } from "rxjs";
import { User } from "../../user.model";
import { Store } from "@ngrx/store";
import { UsersState } from "../../store/users.reducer";
import { getAllUsers } from "../../store/users.selectors";
import { UsersService } from "../../users.service";
import { usersActionTypes } from "../../store/users.actions";

// All base/container type components would be ideally in separate libs/feature(outer lib app)
// so that logic would be agnostic and separate from ui(app), creates less dependacy on versions
@Component({ template: "" })
export abstract class UsersBaseComponent extends BaseComponent
  implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private store: Store<UsersState>,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.users$ = this.store.select(getAllUsers);
  }
}
