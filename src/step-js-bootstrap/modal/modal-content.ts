import {Widget} from "step-js/index";

class ModalContent extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-content");
  }
}

export default ModalContent;
