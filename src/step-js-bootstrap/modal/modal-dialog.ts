import {Widget} from "@step-js-bootstrap/index";

class ModalDialog extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-dialog");
  }
}

export default ModalDialog;
