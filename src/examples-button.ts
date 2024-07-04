import {Button} from "./customized-bootstrap-page/components/buttons";
import {DIV, I, SPAN} from "@step-js-html-5/index";

class ExamplesButton extends DIV {
  iClassNames:  string;
  text: string;
  backgroundColor = "var(--bs-orange)";

  constructor(iClassNames: string, text: string, ...params: any) {
    super(...params);
    this.iClassNames = iClassNames;
    this.text = text;
  }

  mount() {
    const button = new Button(this);
    button.addClassNames("px-4 py-2 d-flow");
    button.setStyleRule("--active-border-color", this.backgroundColor);
    button.setStyleRule("background-color", this.backgroundColor);
    button.setStyleRule("color", "white");
    button.add(new I(this.iClassNames));
    button.add(new SPAN(this.text, "ps-2"));
  }
}

export default ExamplesButton;
