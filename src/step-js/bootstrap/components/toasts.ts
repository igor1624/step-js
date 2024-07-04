import {Utils, VirtualDOM, DIV} from "@step-js-html-5/index";

// ToastContainer

class ToastContainer extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast-container");
  }

  show() {
    VirtualDOM.mount(this);
    Utils.wait(3000).then(() => {
      this.hide();
    });
  }

  hide() {
    VirtualDOM.unmount(this);
  }
}

// Toast

class Toast extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast show");
  }
}

// ToastHeader

class ToastHeader extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast-header");
  }
}

// ToastBody

class ToastBody extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast-body");
  }
}

export {
  ToastContainer,
  Toast,
  ToastHeader,
  ToastBody
}
