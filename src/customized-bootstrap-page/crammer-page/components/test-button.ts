import {DIV, SPAN} from "@step-js-html-5/index";
import {Button} from "../../components/buttons";
import TestSVG from "../inline-vector-images/test-svg";

class TestButton extends Button {

  constructor() {
    super();
    this.addClassNames("crammer-button");
    this.setStyleRule("position", "absolute");
    this.setStyleRule("left", "160px");
    this.setActiveBorderColor("transparent");
  }

  mount() {
    new DIV({
      style: {
        width: "2rem",
        height: "auto"
      }
    }, this).setInnerHTML(TestSVG("var(--bs-pink)", "var(--bs-yellow)"));
    new SPAN("Test", "text-secondary", {
      style: {
        fontSize: "0.75rem",
        fontWeight: 400
      }
    }, this);
  }
}

export default TestButton;
