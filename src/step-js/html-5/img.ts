import {Widget} from "./index";

// IMG

class IMG extends Widget {

  constructor(src: string, ...params: any) {
    super("img", ...params);
    this.props.src = src;
    this.props.alt = "";
  }

  setSrc(src: string) {
    this.props.src = src;
    this.forceUpdate();
  }

  setAlt(alt: string) {
    this.props.alt = alt;
    this.forceUpdate();
  }
}

export default IMG;
