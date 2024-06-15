import Widget from "@step-js-core/widget";

class SPAN extends Widget {

  constructor(innerText: string | undefined, ...params: any) {
    super("span", ...params);
    if (innerText) {
      this.setInnerText(innerText);
    }
  }
}

export default SPAN;
