import {DrawerSM} from "@step-js-custom/index";
import ComponentsModal from "./components-modal/components-modal";
import {Widget} from "@step-js-core/index";
import SideBar from "../side-bar";
import CommonSpinner from "./common-spinner/common-spinner";
import CommonThemesToggler from "./common-themes-toggler/common-themes-toggler-01";

class CustomizedBootstrapJSXPage extends DrawerSM {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super("left", ...params);
    this.addClassNames("h-100");
    this.pathname = pathname;
  }

  mount() {
    let right: Widget;
    if (this.pathname === "/customized-bootstrap-jsx/common/themes-toggler-1") {
      right = new CommonThemesToggler(this.pathname);
    } else if (this.pathname.indexOf("/components") > 0) {
      right = new ComponentsModal(this.pathname);
    } else {
      this.pathname = "/customized-bootstrap-jsx/common/spinner-1";
      right = new CommonSpinner(this.pathname);
    }
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
    this.add(new SideBar(model, this.pathname));
    this.add(right);
  }
}

export default CustomizedBootstrapJSXPage;
