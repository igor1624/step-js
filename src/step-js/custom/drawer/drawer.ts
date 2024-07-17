import {VirtualElement} from "@step-js-core/index";
import DIV from "@step-js-html-5/div";
import "./drawer.css";
import {BootstrapRouter} from "@step-js-bootstrap/index";

// Drawer

class Drawer extends DIV {
  side: "left" | "right";
  virtualElement0?: VirtualElement;
  virtualElement1?: VirtualElement;
  virtualElement2?: VirtualElement;
  toggle?:  Drawer.Toggle;

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
    this.toggle = undefined;
    let child0;
    let child1;
    let child2;
    this.getChildren().forEach((child: any) => {
      if (child instanceof Drawer.Toggle) {
        this.toggle = child;
        this.toggle.drawer = this;
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
    drawer?: Drawer;

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-drawer-toggle");
      this.setAppearance();
      this.props.onClick = () => this.toggleDrawer();
    }

    setAppearance() {
      this.setStyle({
        "--size": "3rem",
        top: 0,
        height: "var(--size)",
        width: "var(--size)",
      });
    }

    toggleDrawer() {
      if (!this.drawer) {
        return;
      }
      this.drawer.toggleClassName("-closed");
    }

    openDrawer() {
      let htmlElement = this.getHTMLElement();
      while (htmlElement) {
        if (!htmlElement.classList.contains("step-js-drawer")) {
          htmlElement = htmlElement.parentElement;
          continue;
        }
        htmlElement.classList.remove("-closed");
        break;
      }
    }

    closeDrawer() {
      let htmlElement = this.getHTMLElement();
      while (htmlElement) {
        if (!htmlElement.classList.contains("step-js-drawer")) {
          htmlElement = htmlElement.parentElement;
          continue;
        }
        htmlElement.classList.add("-closed");
        break;
      }
    }
  }
}

// DrawerSM

class DrawerSM extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-sm");
    // close for inappropriate breakpoints
    BootstrapRouter.createBootstrapProbes();
    let smVisible: any = document.getElementById("--step-js-sm-visible");
    if (smVisible) {
      smVisible = smVisible.checkVisibility();
    }
    let mdVisible: any = document.getElementById("--step-js-md-visible");
    if (mdVisible) {
      mdVisible = mdVisible.checkVisibility();
    }
    let lgVisible: any = document.getElementById("--step-js-lg-visible");
    if (lgVisible) {
      lgVisible = lgVisible.checkVisibility();
    }
    let xlVisible: any = document.getElementById("--step-js-xl-visible");
    if (xlVisible) {
      xlVisible = xlVisible.checkVisibility();
    }
    let xxlVisible: any = document.getElementById("--step-js-xxl-visible");
    if (xxlVisible) {
      xxlVisible = xxlVisible.checkVisibility();
    }
    if (smVisible) {
    } else if (mdVisible) {
    } else if (lgVisible) {
    } else if (xlVisible) {
    } else if (xxlVisible) {
    } else {
      this.addClassNames("-closed");
    }
  }
}

// DrawerMD

class DrawerMD extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-md");
    // close for inappropriate breakpoints
    BootstrapRouter.createBootstrapProbes();
    let smVisible: any = document.getElementById("--step-js-sm-visible");
    if (smVisible) {
      smVisible = smVisible.checkVisibility();
    }
    let mdVisible: any = document.getElementById("--step-js-md-visible");
    if (mdVisible) {
      mdVisible = mdVisible.checkVisibility();
    }
    let lgVisible: any = document.getElementById("--step-js-lg-visible");
    if (lgVisible) {
      lgVisible = lgVisible.checkVisibility();
    }
    let xlVisible: any = document.getElementById("--step-js-xl-visible");
    if (xlVisible) {
      xlVisible = xlVisible.checkVisibility();
    }
    let xxlVisible: any = document.getElementById("--step-js-xxl-visible");
    if (xxlVisible) {
      xxlVisible = xxlVisible.checkVisibility();
    }
    if (mdVisible) {
    } else if (lgVisible) {
    } else if (xlVisible) {
    } else if (xxlVisible) {
    } else {
      this.addClassNames("-closed");
    }
  }
}

// DrawerLG

class DrawerLG extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-lg");
    // close for inappropriate breakpoints
    BootstrapRouter.createBootstrapProbes();
    let smVisible: any = document.getElementById("--step-js-sm-visible");
    if (smVisible) {
      smVisible = smVisible.checkVisibility();
    }
    let mdVisible: any = document.getElementById("--step-js-md-visible");
    if (mdVisible) {
      mdVisible = mdVisible.checkVisibility();
    }
    let lgVisible: any = document.getElementById("--step-js-lg-visible");
    if (lgVisible) {
      lgVisible = lgVisible.checkVisibility();
    }
    let xlVisible: any = document.getElementById("--step-js-xl-visible");
    if (xlVisible) {
      xlVisible = xlVisible.checkVisibility();
    }
    let xxlVisible: any = document.getElementById("--step-js-xxl-visible");
    if (xxlVisible) {
      xxlVisible = xxlVisible.checkVisibility();
    }
    if (lgVisible) {
    } else if (xlVisible) {
    } else if (xxlVisible) {
    } else {
      this.addClassNames("-closed");
    }
  }

}

// DrawerXL

class DrawerXL extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-xl");
    // close for inappropriate breakpoints
    BootstrapRouter.createBootstrapProbes();
    let smVisible: any = document.getElementById("--step-js-sm-visible");
    if (smVisible) {
      smVisible = smVisible.checkVisibility();
    }
    let mdVisible: any = document.getElementById("--step-js-md-visible");
    if (mdVisible) {
      mdVisible = mdVisible.checkVisibility();
    }
    let lgVisible: any = document.getElementById("--step-js-lg-visible");
    if (lgVisible) {
      lgVisible = lgVisible.checkVisibility();
    }
    let xlVisible: any = document.getElementById("--step-js-xl-visible");
    if (xlVisible) {
      xlVisible = xlVisible.checkVisibility();
    }
    let xxlVisible: any = document.getElementById("--step-js-xxl-visible");
    if (xxlVisible) {
      xxlVisible = xxlVisible.checkVisibility();
    }
    if (xlVisible) {
    } else if (xxlVisible) {
    } else {
      this.addClassNames("-closed");
    }
  }

}

// DrawerXXL

class DrawerXXL extends Drawer {

  constructor(side: "left" | "right", ...params: any) {
    super(side, ...params);
    this.addClassNames("step-js-drawer-xxl");
    // close for inappropriate breakpoints
    BootstrapRouter.createBootstrapProbes();
    let smVisible: any = document.getElementById("--step-js-sm-visible");
    if (smVisible) {
      smVisible = smVisible.checkVisibility();
    }
    let mdVisible: any = document.getElementById("--step-js-md-visible");
    if (mdVisible) {
      mdVisible = mdVisible.checkVisibility();
    }
    let lgVisible: any = document.getElementById("--step-js-lg-visible");
    if (lgVisible) {
      lgVisible = lgVisible.checkVisibility();
    }
    let xlVisible: any = document.getElementById("--step-js-xl-visible");
    if (xlVisible) {
      xlVisible = xlVisible.checkVisibility();
    }
    let xxlVisible: any = document.getElementById("--step-js-xxl-visible");
    if (xxlVisible) {
      xxlVisible = xxlVisible.checkVisibility();
    }
    if (xxlVisible) {
    } else {
      this.addClassNames("-closed");
    }
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
