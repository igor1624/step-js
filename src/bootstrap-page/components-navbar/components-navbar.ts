import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import ComponentsNavbar01 from "./components-navbar-01";

class ComponentsNavbar extends DIV {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super(...params);
    this.addClassNames("h-100 position-relative");
    this.setState({
      htmlSource: undefined,
      tsSource: undefined
    });
    this.pathname = pathname;
  }

  mount() {
    if (this.pathname.indexOf("/navbar-1") >= 0) {
      this.add(new ComponentsNavbar01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default ComponentsNavbar;
