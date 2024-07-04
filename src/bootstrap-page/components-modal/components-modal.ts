import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import ComponentsModal01 from "./components-modal-01";

class ComponentsModal extends DIV {
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
    if (this.pathname.indexOf("/modal-1") >= 0) {
      this.add(new ComponentsModal01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default ComponentsModal;
