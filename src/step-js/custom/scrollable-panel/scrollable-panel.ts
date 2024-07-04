import {DIV} from "@step-js-html-5/index";
import "./scrollable-panel.css";

class ScrollablePanel extends DIV {
  scrollbars: "vertical" | "horizontal" | "both";

  constructor(scrollbars: "vertical" | "horizontal" | "both", ...params: any) {
    super(...params);
    this.scrollbars = scrollbars;
    if (this.scrollbars === "vertical") {
      this.setStyleRule("overflow-y", "scroll");
      this.setStyleRule("overflow-x", "hidden");
    } else if (this.scrollbars === "horizontal") {
      this.setStyleRule("overflow-y", "hidden");
      this.setStyleRule("overflow-x", "scroll");
    } else {
      this.setStyleRule("overflow-y", "scroll");
      this.setStyleRule("overflow-x", "scroll");
    }
  }
}

export default ScrollablePanel;
