import {Widget} from "./index";

class VIDEO extends Widget {

  constructor(src: string, ...params: any) {
    super("video", ...params);
    this.props.src = src;
  }
}

export default VIDEO;
