import {Widget} from "step-js/index";

class ModalHeader extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-header");
  }
}

export default ModalHeader;
