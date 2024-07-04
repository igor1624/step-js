import {DrawerSM, ThemesToggler} from "@step-js-custom/index";
import {DIV, SPAN} from "@step-js-html-5/index";
import ScrollablePanel from "@step-js-custom/scrollable-panel/scrollable-panel";

class CustomizedBootstrapPage extends DrawerSM {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super("left", ...params);
    this.addClassNames("h-100");
    this.pathname = pathname;
  }

  mount() {
    this.add(new SideBar(this.pathname));
    this.add(new SPAN("sds"));
  }
}

// SideBar

class SideBar extends DIV {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch border-end");
    this.pathname = pathname;
  }

  mount() {
    const panel = new ScrollablePanel("vertical", "flex-grow-1 border-bottom", this);
    const div = new DIV("flex-grow-0 p-3 d-flex justify-content-end", this);
    div.add(new ThemesToggler({
      htmlElement: document.body
    }));
  }
}

export default CustomizedBootstrapPage;
