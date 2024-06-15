import {Widget} from "@step-js-bootstrap/index";

class ModalBody extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-body");
  }
}

export default ModalBody;
