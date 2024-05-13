import {Widget} from "step-js/index";

class ModalBody extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-body");
  }
}

export default ModalBody;
