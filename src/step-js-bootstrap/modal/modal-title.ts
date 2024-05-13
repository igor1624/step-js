import {Widget} from "step-js";

class ModalTitle extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-title");
  }
}

export default ModalTitle;
