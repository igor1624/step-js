import {Widget} from "./index";

class B extends Widget {

  constructor(...params: any) {
    super("b", ...params);
  }
}

export default B;
