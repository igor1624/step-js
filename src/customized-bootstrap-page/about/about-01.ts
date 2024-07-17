import {DIV, IMG} from "@step-js-html-5/index";

class About01 extends DIV {
  parentDIV: DIV;

  constructor(parentDIV: DIV, ...params: any) {
    super(...params);
    this.addClassNames("d-flex justify-content-center align-items-center");
    this.setStyleRule("position","absolute");
    this.setStyleRule("left", "0");
    this.setStyleRule("top", "0");
    this.setStyleRule("right", "0");
    this.setStyleRule("bottom", "0");
    this.parentDIV = parentDIV;
  }

  mount() {
    const img = new IMG("./assets/images/under-construction.png", this);
    img.setStyle({
      maxWidth: "390px",
    });
  }
}

export default About01;
