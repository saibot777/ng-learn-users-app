import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/libs/core/base.component";

// All base/container type components would be ideally in separate libs/feature(outer lib app)
// so that logic would be agnostic and separate from ui(app), creates less dependacy on versions
@Component({ template: "" })
export abstract class UsersBaseComponent extends BaseComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
