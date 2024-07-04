import {VirtualElement, Router, UL, LI, A} from "@step-js-html-5/index";

// Nav

class Nav extends UL {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("nav");
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

namespace Nav {

  // Nav.Link

  export class Link extends A {

    constructor(href: string, text: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("nav-link");
      this.props.href = href;
      if (text) {
        this.setInnerText(text);
      }
      this.props.onClick = (event: any) => {
        Router.navigateTo(event, this.props.href);
      }
    }
  }

  // Nav.Dropdown

  export class Dropdown extends LI {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("nav-item dropdown");
    }
  }

  // Nav.DropdownToggle

  export class DropdownToggle extends A {

    constructor(text: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("nav-link dropdown-toggle");
      this.props.role = "button";
      if (text) {
        this.setInnerText(text);
      }
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
              if (child.props.className.indexOf("dropdown-menu") >= 0) {
                child.createdBy.show();
              }
            }
          } catch (error: any) {
          }
        });
      }
    }
  }
}

export default Nav;
