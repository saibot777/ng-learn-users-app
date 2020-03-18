import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { UserModalComponent } from "./user-modal.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [UserModalComponent],
  exports: [UserModalComponent],
  bootstrap: [UserModalComponent]
})
export class UserModalModule {}
