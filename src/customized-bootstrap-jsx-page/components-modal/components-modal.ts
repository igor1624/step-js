import {DIV} from "@step-js-html-5/index";
import SourcesPage from "../../sources-page";
import ComponentsModal01 from "./components-modal-01";
import ComponentsModal02 from "./components-modal-02";
import ComponentsModal03 from "./components-modal-03";
import ComponentsModal04 from "./components-modal-04";
import ComponentsModal05 from "./components-modal-05";
import ComponentsModal06 from "./components-modal-06";
import ComponentsModal07 from "./components-modal-07";
import ComponentsModal08 from "./components-modal-08";

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
    if (this.pathname.indexOf("/modal-2") >= 0) {
      this.add(new ComponentsModal02(this));
    } else if (this.pathname.indexOf("/modal-3") >= 0) {
      this.add(new ComponentsModal03(this));
    } else if (this.pathname.indexOf("/modal-4") >= 0) {
      this.add(new ComponentsModal04(this));
    } else if (this.pathname.indexOf("/modal-5") >= 0) {
      this.add(new ComponentsModal05(this));
    } else if (this.pathname.indexOf("/modal-6") >= 0) {
      this.add(new ComponentsModal06(this));
    } else if (this.pathname.indexOf("/modal-7") >= 0) {
      this.add(new ComponentsModal07(this));
    } else if (this.pathname.indexOf("/modal-8") >= 0) {
      this.add(new ComponentsModal08(this));
    } else {
      this.add(new ComponentsModal01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      this.add(new SourcesPage(this));
    }
  }
}

export default ComponentsModal;
