import {Widget} from "step-js/index";

class ModalDialog extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal-dialog");
  }
}

export default ModalDialog;
