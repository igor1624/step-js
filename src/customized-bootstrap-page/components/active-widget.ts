import {Utils, StyleRuleAnimations, Widget} from "@step-js-core/index";
import "./active-widget.css";

class ActiveWidget extends Widget {
  activeBorderHTMLElement?: HTMLElement;
  activeHTMLElement?: HTMLElement;

  constructor(tag: string, ...params: any) {
    super(tag, ...params);
    this.addClassNames("active-widget");
    this.setStyleRule("--active-border-offset", "0");
    this.setStyleRule("--active-border-size", "2px");
    this.setStyleRule("--active-border-color", "var(--bs-orange)");
    this.setStyleRule("--active-background-color", "var(--bs-orange)");
    if (this.hasClassName("position-absolute")) {
    } else if (this.hasClassName("position-relative")) {
    } else if (this.props.style.position === "relative") {
    } else if (this.props.style.position === "absolute") {
    } else {
      this.props.style.position = "relative";
    }
  }

  setActiveBorderOffset(activeBorderOffset: string) {
    this.setStyleRule("--active-border-offset", activeBorderOffset);
  }

  setActiveBorderSize(activeBorderSize: string) {
    this.setStyleRule("--active-border-size", activeBorderSize);
  }

  setActiveBorderColor(activeBorderColor: string) {
    this.setStyleRule("--active-border-color", activeBorderColor);
  }

  setActiveBackgroundColor(activeBackgroundColor: string) {
    this.setStyleRule("--active-background-color", activeBackgroundColor);
  }

  callComponentDidMount() {
    const htmlElement = this.getHTMLElement();
    if (!htmlElement) {
      super.callComponentDidMount();
      return;
    }
    this.activeBorderHTMLElement = Utils.mountHTMLElement(htmlElement, "div", {
      className: "active-border-html-element",
    });
    this.activeHTMLElement = Utils.mountHTMLElement(htmlElement, "div", {
      className: "active-html-element" + (this.disabled ? " disabled" : ""),
    });

    htmlElement.addEventListener("pointerdown", () => {
      let buttonHTMLElement: HTMLElement | null = htmlElement;
      while (buttonHTMLElement) {
        if (buttonHTMLElement.tagName === "BUTTON") {
          break;
        }
        buttonHTMLElement = buttonHTMLElement.parentElement;
      }
      if (!buttonHTMLElement) {
        return;
      }
      const disabled = buttonHTMLElement.getAttribute("disabled");
      if (typeof disabled === "string") {
        return;
      }
      StyleRuleAnimations.fire(this.activeHTMLElement!, {
        styleRule: "opacity",
        from: 0.5,
        to: 0,
        duration: 0.5
      });
    });
    super.callComponentDidMount();
  }
}

export default ActiveWidget;
