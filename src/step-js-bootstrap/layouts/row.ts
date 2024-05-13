import {Widget} from "step-js/index";

class Row extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("row");
  }

}

export default Row;
