import {DIV, SPAN} from "@step-js-html-5/index";
import {Button} from "../../components/buttons";
import HomeSVG from "../inline-vector-images/home-svg";
import "./buttons.css";

class LessonsButton extends Button {

  constructor() {
    super();
    this.addClassNames("crammer-button");
    this.setStyleRule("position", "absolute");
    this.setStyleRule("left", "20px");
    this.setActiveBorderColor("transparent");
  }

  mount() {
    new DIV({
      style: {
        width: "2rem",
        height: "auto"
      }
    }, this).setInnerHTML(HomeSVG("var(--bs-orange)", "var(--bs-pink"));
    new SPAN("Lessons", "text-secondary", {
      style: {
        fontSize: "0.75rem",
        fontWeight: 400
      }
    }, this);
  }
}

export default LessonsButton;
