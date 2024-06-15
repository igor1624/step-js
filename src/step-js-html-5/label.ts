import Widget from "@step-js-core/widget";

class LABEL extends Widget {

  constructor(innerText: string, ...params: any) {
    super("label", ...params);
    this.setInnerText(innerText);
  }
}

export default LABEL;
