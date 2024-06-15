import {Widget} from "@step-js-bootstrap/index";

class Row extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("row");
  }

}

export default Row;
