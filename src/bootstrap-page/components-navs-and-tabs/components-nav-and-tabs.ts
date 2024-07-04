import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import ComponentsNavAndTabs01 from "./components-nav-and-tabs-01";
import ComponentsNavAndTabs02 from "./components-nav-and-tabs-02";

class ComponentsNavAndTabs extends DIV {
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
    if (this.pathname.indexOf("/navs-and-tabs-1") >= 0) {
      this.add(new ComponentsNavAndTabs01(this));
    }
    if (this.pathname.indexOf("/navs-and-tabs-2") >= 0) {
      this.add(new ComponentsNavAndTabs02(this));
    }
    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default ComponentsNavAndTabs;
