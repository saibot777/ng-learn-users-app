import { NgModule, Type } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/users.component";
import { BaseComponent } from "../libs/core/base.component";

const ROUTE_COMPONENTS: { [componentName: string]: Type<BaseComponent> } = {
  users: UsersComponent
};

const routes: Routes = [
  {
    path: "",
    component: ROUTE_COMPONENTS.users
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
