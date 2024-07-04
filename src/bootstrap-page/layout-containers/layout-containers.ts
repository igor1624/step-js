import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";

class LayoutContainers extends DIV {
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

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }

}

export default LayoutContainers;
