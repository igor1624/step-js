import {Drawer, DrawerMD} from "@step-js-custom/index";
import SideBar from "../side-bar";
import {DIV} from "@step-js-html-5/index";
import CommonThemesToggler01 from "./common-themes-toggler/common-themes-toggler-01";
import ComponentsModal02 from "./components-modal/components-modal-02";
import ComponentsModal03 from "./components-modal/components-modal-03";
import ComponentsModal04 from "./components-modal/components-modal-04";
import ComponentsModal05 from "./components-modal/components-modal-05";
import ComponentsModal06 from "./components-modal/components-modal-06";
import ComponentsModal07 from "./components-modal/components-modal-07";
import ComponentsModal08 from "./components-modal/components-modal-08";
import ComponentsModal01 from "./components-modal/components-modal-01";
import CommonSpinner01 from "./common-spinner/common-spinner-01";
import SourcesPage from "../sources-page";
import SideBarToggle from "../side-bar-toggle";

class CustomizedBootstrapJSXPage extends DrawerMD {
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
      {
        title: "Common"
      },
      {
        title: "Spinner",
        href: "/customized-bootstrap-jsx/common/spinner-1"
      },
      {
        title: "Themes Toggler",
        href: "/customized-bootstrap-jsx/common/themes-toggler-1"
      },
      {
        title: "Components"
      },
      {
        title: "Modal / File shared",
        href: "/customized-bootstrap-jsx/components/modal-1"
      },
      {
        title: "Modal / Privacy info",
        href: "/customized-bootstrap-jsx/components/modal-2"
      },
      {
        title: "Modal / Archive project",
        href: "/customized-bootstrap-jsx/components/modal-3"
      },
      {
        title: "Modal / Archive project",
        href: "/customized-bootstrap-jsx/components/modal-4"
      },
      {
        title: "Modal / Storage plan",
        href: "/customized-bootstrap-jsx/components/modal-5"
      },
      {
        title: "Modal / Permission required",
        href: "/customized-bootstrap-jsx/components/modal-6"
      },
      {
        title: "Modal / Backups",
        href: "/customized-bootstrap-jsx/components/modal-7"
      },
      {
        title: "Modal / Picture shared",
        href: "/customized-bootstrap-jsx/components/modal-8"
      },
    ];
    const toggle = new SideBarToggle(this);
    this.add(new SideBar(model, this.pathname, toggle));
    const div0 = new DIV("h-100 d-flex flex-column position-relative");

    let div1 = new DIV("flex-grow-0 flex-shrink-0 d-flex justify-content-center align-items-center");
    div1.setStyleRule("flex-basis", "4rem");
    div1.setStyleRule("font-weight", "700");
    div1.setInnerText("CUSTOMIZED BOOTSTRAP + JSX");
    div0.add(div1);

    div1 = new DIV("flex-grow-1 position-relative", div0);

    if (this.pathname === "/customized-bootstrap-jsx/common/themes-toggler-1") {
      div1.add(new CommonThemesToggler01(this));
    } else if (this.pathname.indexOf("/components") > 0) {
      if (this.pathname.indexOf("/modal-2") >= 0) {
        div1.add(new ComponentsModal02(this));
      } else if (this.pathname.indexOf("/modal-3") >= 0) {
        div1.add(new ComponentsModal03(this));
      } else if (this.pathname.indexOf("/modal-4") >= 0) {
        div1.add(new ComponentsModal04(this));
      } else if (this.pathname.indexOf("/modal-5") >= 0) {
        div1.add(new ComponentsModal05(this));
      } else if (this.pathname.indexOf("/modal-6") >= 0) {
        div1.add(new ComponentsModal06(this));
      } else if (this.pathname.indexOf("/modal-7") >= 0) {
        div1.add(new ComponentsModal07(this));
      } else if (this.pathname.indexOf("/modal-8") >= 0) {
        div1.add(new ComponentsModal08(this));
      } else {
        div1.add(new ComponentsModal01(this));
      }
    } else {
      this.pathname = "/customized-bootstrap-jsx/common/spinner-1";
      div1.add(new CommonSpinner01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      div1.add(new SourcesPage(this));
    }

    this.add(div0);
  }
}

export default CustomizedBootstrapJSXPage;
