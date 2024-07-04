import {Widget, SPAN} from "@step-js-html-5/index";

class SpinnerBorder extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("spinner-border");
  }

  mount() {
    new SPAN("Loading...", "visually-hidden", this);
  }
}

export {
  SpinnerBorder
};
