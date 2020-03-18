import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";
import { userReducer } from "./store/users.reducer";
import { UsersEffects } from "./store/users.effects";
import { UsersRoutingModule } from "./users-routing.module";
import { COMPONENTS } from "./users.collection";
import { UserModalModule } from "./components/user-modal/user-modal.module";
import { HttpClientModule } from "@angular/common/http";
import { UsersGuard } from "./users.guard";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([UsersEffects]),
    UsersRoutingModule,
    UserModalModule
  ],
  providers: [UsersService, UsersGuard]
})
export class UsersModule {}
