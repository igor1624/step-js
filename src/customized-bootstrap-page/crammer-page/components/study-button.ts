import {DIV, SPAN} from "@step-js-html-5/index";
import {Button} from "../../components/buttons";
import StudySVG from "../inline-vector-images/study-svg";

class StudyButton extends Button {

  constructor() {
    super();
    this.addClassNames("crammer-button");
    this.setStyleRule("position", "absolute");
    this.setStyleRule("left", "90px");
    this.setActiveBorderColor("transparent");
  }

  mount() {
    new DIV({
      style: {
        width: "2rem",
        height: "auto"
      }
    }, this).setInnerHTML(StudySVG("var(--bs-orange)", "var(--bs-pink"));
    new SPAN("Study", "text-secondary", {
      style: {
        fontSize: "0.75rem",
        fontWeight: 400
      }
    }, this);
  }
}

export default StudyButton;
