import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import ThemesToggler from "@step-js-custom/themes-toggler/themes-toggler";
import CommonThemesToggler01 from "./common-themes-toggler";

class CommonThemesToggler extends DIV {
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
    if (this.pathname.indexOf("/themes-toggler-1") >= 0) {
      this.add(new CommonThemesToggler01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default CommonThemesToggler;
