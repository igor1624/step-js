import {Widget} from "@step-js-bootstrap/index";

class ModalTitle extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-title");
  }
}

export default ModalTitle;
