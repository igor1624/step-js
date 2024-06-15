import {Widget} from "@step-js-bootstrap/index";
import "./drawer.css";

// Drawer

class Drawer extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("step-js-drawer");
  }
}

// LeftDrawer

class LeftDrawer extends Drawer {
  constructor(...params: any) {
    super(...params);
    this.addClassName("step-js-left-drawer");
  }
}

// RightDrawer

class RightDrawer extends Drawer {
  constructor(...params: any) {
    super(...params);
    this.addClassName("step-js-right-drawer");
  }
}

export {
  LeftDrawer,
  RightDrawer
}
