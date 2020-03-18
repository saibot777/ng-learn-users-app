import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoPageFoundComponent } from "./no-page-found.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  },
  { path: "**", component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
