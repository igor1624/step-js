import {VirtualElement} from "@step-js-core/index";
import DIV from "@step-js-html-5/div";
import "./drawer.css";

// Drawer

class Drawer extends DIV {
  side: "left" | "right";
  virtualElement0?: VirtualElement;
  virtualElement1?: VirtualElement;
  virtualElement2?: VirtualElement;

  constructor(side: "left" | "right", ...params: any) {
    super(...params);
    this.addClassNames(`step-js-drawer step-js-drawer-${side}`);
    this.side = side;
  }

  setDrawerWidth(width: string) {
    this.setStyleRule("--drawer-width", width);
  }

  addVirtualElements(parentVirtualElement: VirtualElement) {
    this.virtualElement0 = new VirtualElement("div", {
      className: "step-js-drawer-div-0"
    });
    this.virtualElement1 = new VirtualElement("div", {
      className: "step-js-drawer-div-1"
    });
    this.virtualElement2 = new VirtualElement("div", {
      className: "step-js-drawer-div-2"
    });
    if (this.side === "left") {
      this.addVirtualElement(parentVirtualElement, this.virtualElement0);
      this.addVirtualElement(parentVirtualElement, this.virtualElement1);
      this.addVirtualElement(parentVirtualElement, this.virtualElement2);
    } else {
      this.addVirtualElement(parentVirtualElement, this.virtualElement1);
      this.addVirtualElement(parentVirtualElement, this.virtualElement0);
      this.addVirtualElement(parentVirtualElement, this.virtualElement2);
    }
    let child0;
    let child1;
    let child2;
    this.getChildren().forEach((child: any) => {
      if (child instanceof Drawer.Toggle) {
        child2 = child;
      } else if (!child0) {
        child0 = child;
      } else if (!child1) {
        child1 = child;
      }
    });
    if (this.side === "left") {
      if (child0) {
        this.addVirtualElement(this.virtualElement2, child0);
      }
      if (child1) {
        this.addVirtualElement(this.virtualElement1, child1);
      }
    } else {
      if (child0) {
        this.addVirtualElement(this.virtualElement1, child0);
      }
      if (child1) {
        this.addVirtualElement(this.virtualElement2, child1);
      }
    }
    if (child2) {
      super.addVirtualElement(parentVirtualElement, child2);
    }
  }
}

namespace Drawer {

  export class Toggle extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-drawer-toggle");
    }

    setSize(size: string) {
      this.setStyleRule("--size", size);
    }

  }
}

// DrawerSM

class DrawerSM extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-sm");
  }

}

// DrawerMD

class DrawerMD extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-md");
  }
}

// DrawerLG

class DrawerLG extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-lg");
  }

}

// DrawerXL

class DrawerXL extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-xl");
  }

}

// DrawerXXL

class DrawerXXL extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-xxl");
  }
}

export {
  Drawer,
  DrawerSM,
  DrawerMD,
  DrawerLG,
  DrawerXL,
  DrawerXXL
};
