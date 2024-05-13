import {Widget} from "step-js/index";

class ModalFooter extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-footer");
  }
}

export default ModalFooter;
