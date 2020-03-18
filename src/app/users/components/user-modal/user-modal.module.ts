import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { UserModalComponent } from "./user-modal.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [UserModalComponent],
  exports: [UserModalComponent],
  bootstrap: [UserModalComponent]
})
export class UserModalModule {}
