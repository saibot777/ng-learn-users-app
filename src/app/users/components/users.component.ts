import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UsersBaseComponent } from "./base/users.base-component";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent extends UsersBaseComponent {}
