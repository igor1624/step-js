import Widget from "@step-js-core/widget";
import TD from "./td";

class TR extends Widget {

  constructor(...params: any) {
    super("tr", ...params);
  }

  addTD() {
    const td = new TD();
    this.add(td);
    return td;
  }
}

export default TR;
