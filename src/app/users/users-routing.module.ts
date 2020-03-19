import { NgModule, Type } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/users.component";
import { BaseComponent } from "../libs/core/base.component";
import { UsersGuard } from "./users.guard";

const ROUTE_COMPONENTS: { [componentName: string]: Type<BaseComponent> } = {
  users: UsersComponent
};

const routes: Routes = [
  {
    path: "",
    component: ROUTE_COMPONENTS.users,
    canActivate: [UsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
