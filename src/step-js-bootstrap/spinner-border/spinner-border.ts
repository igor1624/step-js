import {SPAN, Widget} from "@step-js-bootstrap/index";

class SpinnerBorder extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("spinner-border");
  }

  build() {
    new SPAN("Loading...", "visually-hidden", this);
  }
}

export default SpinnerBorder;
