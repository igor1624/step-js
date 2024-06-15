import {Widget} from "@step-js-bootstrap/index";

class ModalFooter extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-footer");
  }
}

export default ModalFooter;
