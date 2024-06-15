import Widget from "@step-js-core/widget";
import TBODY from "./tbody";

class TABLE extends Widget {

  constructor(...params: any) {
    super("table", ...params);
  }

  addTBODY() {
    const tbody = new TBODY();
    this.add(tbody);
    return tbody;
  }
}

export default TABLE;
