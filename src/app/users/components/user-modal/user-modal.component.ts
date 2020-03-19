import { Component, ViewChild } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";
import { User } from "../../user.model";
import { UsersState } from "../../store/users.reducer";
import * as UsersActions from "../../store/users.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-user-modal",
  templateUrl: "./user-modal.component.html",
  styleUrls: ["./user-modal.component.scss"]
})
export class UserModalComponent {
  closeResult: string;
  model: User;

  @ViewChild("MyForm", { static: false }) MyForm: NgForm;

  constructor(
    private modalService: NgbModal,
    private store: Store<UsersState>
  ) {
    this.model = {} as User;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(UsersActions.createUser(form.value));
    } else {
      form.control.markAllAsTouched();
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
