import {Widget} from "@step-js-bootstrap/index";
import "./modal.css";

class Modal extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("modal");
    this.props.tabindex = -1;
  }

  callComponentDidMount() {
    const htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.addEventListener("click", (event: any) => {
        if (event.target === htmlElement) {
          this.hide();
        }
      });
    }
    super.callComponentDidMount();
  }

  show() {
    const htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.classList.remove("out");
      htmlElement.classList.add("in");
    }
  }

  hide() {
    const htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.classList.add("out");
    }
  }
}

export default Modal;
