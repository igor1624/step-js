import {VirtualDOM, BUTTON, DIV} from "@step-js-html-5/index";

// Modal

class Modal extends DIV {
  shown: boolean = false;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("modal");
    this.setStyleRule("background-color", "rgba(0, 0, 0, 0.5)");
    this.props.tabindex = -1;
  }

  callComponentDidMount() {
    const htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.addEventListener("click", (event: any) => {
        if (event.target === htmlElement) {
          if (this.shown) {
            this.hide();
          }
        }
      });
    }
    super.callComponentDidMount();
  }

  show() {
    if (this.shown) {
      return;
    }
    this.shown = true;
    this.addClassNames("d-block");
    VirtualDOM.mount(this);
  }

  hide() {
    if (!this.shown) {
      return;
    }
    this.shown = false;
    this.removeClassName("d-block");
    VirtualDOM.unmount(this);
  }
}

namespace Modal {

  // Modal.Dialog

  export class Dialog extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-dialog");
    }
  }

  // Modal.Content

  export class Content extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-content");
    }
  }

  // Modal.Header

  export class Header extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-header");
    }
  }

  // Modal.Title

  export class Title extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-title");
    }
  }

  // Modal.BtnClose

  export class BtnClose extends BUTTON {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("btn-close");
      this.props.onClick = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        let virtualElement = this.virtualElement;
        while (virtualElement) {
          if (virtualElement.createdBy instanceof Modal) {
            virtualElement.createdBy.hide();
            break;
          }
          virtualElement = virtualElement.$parentVirtualElement;
        }
      }
    }
  }

  // Modal.Body

  export class Body extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-body");
    }
  }

  // Modal.Footer

  export class Footer extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-footer");
    }
  }
}

export default Modal;
