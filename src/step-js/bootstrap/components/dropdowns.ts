import {
  Router,
  Utils,
  VirtualElement,
  Widget,
  DIV,
  BUTTON,
  A,
  SPAN,
  HR
} from "@step-js-html-5/index";

// Dropdown

class Dropdown extends DIV {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("dropdown");
  }
}

namespace Dropdown {

  // Dropdown.Toggle

  class Toggle extends BUTTON {

    constructor(type: "primary" | "secondary" | "success" | "danger" | "warning" | "info", text: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("dropdown-toggle btn btn-" + type);
      this.props.type = "button";
      if (text) {
        this.setInnerText(text);
      }
      this.props.onClick = () => {
        if (!this.virtualElement) {
          return;
        }
        let parentVirtualElement = this.virtualElement.$parentVirtualElement;
        if (!parentVirtualElement) {
          return;
        }
        parentVirtualElement.getChildren().forEach((virtualElement: VirtualElement) => {
          if (virtualElement.createdBy) {
            if (virtualElement.createdBy instanceof Menu) {
              virtualElement.createdBy.show();
            }
          }
        });
      }
    }
  }

  // Dropdown.TogglePrimary

  export class TogglePrimary extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("primary", text, ...params);
    }
  }

  // Dropdown.ToggleSecondary

  export class ToggleSecondary extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("secondary", text, ...params);
    }
  }

  // Dropdown.ToggleSuccess

  export class ToggleSuccess extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("success", text, ...params);
    }
  }

  // Dropdown.ToggleDanger

  export class ToggleDanger extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("danger", text, ...params);
    }
  }

  // Dropdown.ToggleWarning

  export class ToggleWarning extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("warning", text, ...params);
    }
  }

  // Dropdown.ToggleInfo

  export class ToggleInfo extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("info", text, ...params);
    }
  }

  // Dropdown.Menu

  export class Menu extends Widget {
    menuHTMLElement: HTMLElement | null | undefined;
    menuParentHTMLElement: HTMLElement | null | undefined;
    fixedHTMLElement: HTMLElement | undefined;

    constructor(...params: any) {
      super("ul", ...params);
      this.addClassNames("dropdown-menu");
    }

    addVirtualElements(parentVirtualElement: VirtualElement) {
      this.getChildren().forEach((child: any) => {
        const virtualElement = new VirtualElement("li");
        this.addVirtualElement(parentVirtualElement, virtualElement);
        this.addVirtualElement(virtualElement, child);
      });
    }

    show() {
      this.menuHTMLElement = this.virtualElement?.getHTMLElement();
      if (!this.menuHTMLElement) {
        return;
      }
      this.menuParentHTMLElement = this.menuHTMLElement.parentElement;
      if (!this.menuParentHTMLElement) {
        return;
      }
      this.fixedHTMLElement = Utils.mountHTMLElement(document.body, "div", {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }
      });
      if (!this.fixedHTMLElement) {
        return;
      }

      this.menuParentHTMLElement.removeChild(this.menuHTMLElement);

      this.fixedHTMLElement.appendChild(this.menuHTMLElement);
      this.fixedHTMLElement.onclick = () => {
        this.hide();
      };

      this.addClassNames("show");
    }

    hide() {
      if (this.fixedHTMLElement) {
        this.removeClassName("show");
        this.fixedHTMLElement!.removeChild(this.menuHTMLElement!);
        this.menuParentHTMLElement!.appendChild(this.menuHTMLElement!);
        this.fixedHTMLElement!.remove();
        this.fixedHTMLElement = undefined;
      }
    }
  }

  // Dropdown.Link

  export class Link extends A {

    constructor(href: string, text: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("dropdown-item");
      this.props.href = href;
      if (text) {
        this.setInnerText(text);
      }
      this.props.onClick = (event: any) => {
        Router.navigateTo(event, this.props.href);
      }
    }
  }

  // Dropdown.Button

  export class Button extends BUTTON {

    constructor(text: string, ...params: any) {
      super(...params);
      this.addClassNames("dropdown-item");
      this.setInnerText(text);
    }
  }

  // Dropdown.Text

  export class Text extends SPAN {

    constructor(text: string, ...params: any) {
      super(text, ...params);
      this.addClassNames("dropdown-item-text");
    }
  }

  // Dropdown.Divider

  export class Divider extends HR {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("dropdown-divider");
    }
  }
}

export default Dropdown;
