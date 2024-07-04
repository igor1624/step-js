import {Widget} from "./index";
import TR from "./tr";

class TBODY extends Widget {

  constructor(...params: any) {
    super("tbody", ...params);
  }

  addTR() {
    const tr = new TR();
    this.add(tr);
    return tr;
  }
}

export default TBODY;
