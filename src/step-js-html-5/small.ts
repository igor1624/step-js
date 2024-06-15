import Widget from "@step-js-core/widget";

class SMALL extends Widget {

  constructor(innerText: string, ...params: any) {
    super("small", ...params);
    this.setInnerText(innerText);
  }
}

export default SMALL;
