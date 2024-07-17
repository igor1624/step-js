import {Drawer, DrawerMD} from "@step-js-custom/index";
import {DIV, IMG, SPAN} from "@step-js-html-5/index";
import SideBar from "../side-bar";
import SourcesPage from "../sources-page";
import About01 from "./about/about-01";
import SideBarToggle from "../side-bar-toggle";

class CustomizedBootstrapPage extends DrawerMD {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super("left", ...params);
    this.addClassNames("h-100");
    this.pathname = pathname;
    this.setState({
      htmlSource: undefined,
      tsSource: undefined
    });
  }

  mount() {
    const model = [
    ];
    const toggle = new SideBarToggle(this);
    this.add(new SideBar(model, this.pathname, toggle));
    const div0 = new DIV("h-100 d-flex flex-column position-relative");

    let div1 = new DIV("flex-grow-0 flex-shrink-0 d-flex justify-content-center align-items-center");
    div1.setStyleRule("flex-basis", "4rem");
    div1.setStyleRule("font-weight", "700");
    div1.setInnerText("CUSTOMIZED BOOTSTRAP");
    div0.add(div1);

    div1.add(new About01(this));

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      div1.add(new SourcesPage(this));
    }

    this.add(div0);
  }
}

export default CustomizedBootstrapPage;
