import {Router, VirtualElement, DIV, A, BUTTON, UL, NAV} from "@step-js-html-5/index";

// Navbar

class Navbar extends NAV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar");
  }
}

namespace Navbar {

  export class Brand extends A {

    constructor(href: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("navbar-brand");
      this.props.href = href ? href : "#";
      this.props.onClick = (event: any) => {
        Router.navigateTo(event, this.props.href);
      }
    }
  }

  export class Toggler extends BUTTON {
    constructor(...params: any) {
      super(...params);
      this.addClassNames("navbar-toggler");
      this.props.type = "button";
      this.props.onClick = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        if (!this.virtualElement) {
          return;
        }
        let parentVirtualElement = this.virtualElement.$parentVirtualElement;
        if (!parentVirtualElement) {
          return;
        }
        parentVirtualElement.getChildren().forEach((child: any) => {
          try {
            if (child.props.className) {
              if (child.props.className.indexOf("navbar-collapse") >= 0) {
                child.getHTMLElement().classList.toggle("show");
              }
            }
          } catch (error: any) {
          }
        });
      }
    }
  }

  export class Collapse extends DIV {
    constructor(...params: any) {
      super(...params);
      this.addClassNames("collapse navbar-collapse");
    }
  }

  export class Nav extends UL {
    constructor(...params: any) {
      super(...params);
      this.addClassNames("navbar-nav");
    }

    addVirtualElements(parentVirtualElement: VirtualElement) {
      this.getChildren().forEach((child: any) => {
        if (child.type === "li") {
          // li.dropdown or li.*
          return super.addVirtualElement(parentVirtualElement, child);
        }
        const virtualElement = new VirtualElement("li", {
          className: "nav-item"
        });
        this.addVirtualElement(parentVirtualElement, virtualElement);
        this.addVirtualElement(virtualElement, child);
      });
    }
  }
}

// NavbarSM

class NavbarSM extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar navbar-expand-sm");
  }
}

// NavbarMD

class NavbarMD extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar navbar-expand-md");
  }
}

// NavbarLG

class NavbarLG extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar navbar-expand-lg");
  }
}

// NavbarXL

class NavbarXL extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar navbar-expand-xl");
  }
}

// NavbarXXL

class NavbarXXL extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("navbar navbar-expand-xxl");
  }
}

export {
  Navbar,
  NavbarSM,
  NavbarMD,
  NavbarLG,
  NavbarXL,
  NavbarXXL
}
