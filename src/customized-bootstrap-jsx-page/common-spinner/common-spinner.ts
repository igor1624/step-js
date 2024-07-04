import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import CommonSpinner01 from "./common-spinner-01";

class CommonSpinner extends DIV {
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
    if (this.pathname.indexOf("/spinner-1") >= 0) {
      this.add(new CommonSpinner01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default CommonSpinner;
