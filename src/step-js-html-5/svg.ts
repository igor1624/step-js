import Widget from "@step-js-core/widget";

class SVG extends Widget {

  constructor(svg: string, ...params: any) {
    super("div", ...params);
    this.setInnerHTML(svg);
  }
}

export default SVG;
