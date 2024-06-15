import {Widget} from "@step-js-bootstrap/index";

class ModalContent extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-content");
  }
}

export default ModalContent;
