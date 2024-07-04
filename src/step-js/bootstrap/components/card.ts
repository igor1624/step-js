import {Widget} from "@step-js-core/index";

// Card

class Card extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("card");
  }
}

// CardHeader

class CardHeader extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("card-header");
  }
}

// CardBody

class CardBody extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("card-body");
  }
}

// CardTitle

class CardTitle extends Widget {

  constructor(text: string, ...params: any) {
    super("h5", ...params);
    this.addClassNames("card-title");
    this.setInnerText(text);
  }
}

// CardText

class CardText extends Widget {

  constructor(text: string, ...params: any) {
    super("p", ...params);
    this.addClassNames("card-text");
    this.setInnerText(text);
  }
}

export {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
}
