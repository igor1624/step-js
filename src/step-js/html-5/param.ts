import {Widget} from "./index";

class PARAM extends Widget {

  constructor(...params: any) {
    super("param", ...params);
  }
}

export default PARAM;
