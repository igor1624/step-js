import {DIV, SPAN} from "@step-js-html-5/index";
import {RoundButton} from "../../components/buttons";
import SettingsSVG from "../inline-vector-images/settings-svg";
import "./buttons.css";

class SettingsButton extends RoundButton {

  constructor() {
    super();
    this.setSize("5rem");
    this.addClassNames("bg-body-tertiary crammer-button crammer-settings-button");
    this.setStyleRule("position", "absolute");
    this.setStyleRule("left", "230px");
    this.setActiveBorderColor("transparent");
  }

  mount() {
    new DIV({
      style: {
        width: "2rem",
        height: "auto"
      }
    }, this).setInnerHTML(SettingsSVG("var(--bs-orange)", "var(--bs-pink"));
    new SPAN("Settings", "text-secondary", {
      style: {
        fontSize: "0.75rem",
        fontWeight: 400
      }
    }, this);
  }
}

export default SettingsButton;
