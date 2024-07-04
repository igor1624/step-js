import {Widget} from "./index";

class A extends Widget {

  constructor(...params: any) {
    super("a", ...params);
  }
}

export default A;
