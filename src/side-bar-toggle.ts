import {Button, RoundButton} from "./customized-bootstrap-page/components/buttons";
import {DIV, I, SPAN} from "@step-js-html-5/index";
import {Drawer} from "@step-js-custom/index";
import "./side-bar-toggle.css";

class SideBarToggle extends Drawer.Toggle {
  backgroundColor = "var(--bs-orange)";

  constructor(...params: any) {
    super(...params);
    this.addClassNames("side-bar-toggle d-flex justify-content-center align-items-center");
    this.setStyleRule("--size", "4rem");
  }

  mount() {
    let button = new RoundButton(this);
    button.addClassNames("side-bar-toggle-close");
    button.setSize("3rem");
    button.setStyleRule("--active-border-color", this.backgroundColor);
    button.setStyleRule("background-color", this.backgroundColor);
    button.setStyleRule("color", "white");
    button.add(new I("fa-solid fa-chevron-left"));

    button = new RoundButton(this);
    button.addClassNames("side-bar-toggle-open");
    button.setSize("3rem");
    button.setStyleRule("--active-border-color", this.backgroundColor);
    button.setStyleRule("background-color", this.backgroundColor);
    button.setStyleRule("color", "white");
    button.add(new I("fa-solid fa-chevron-right"));
  }
}

export default SideBarToggle;
