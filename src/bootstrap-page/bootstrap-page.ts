import {DIV} from "@step-js-html-5/index";
import {DrawerMD} from "@step-js-custom/index";
import SideBar from "../side-bar";
import SourcesPage from "../sources-page";
import LayoutContainers01 from "./layout-containers/layout-containers-01";
import ComponentsNavAndTabs01 from "./components-navs-and-tabs/components-nav-and-tabs-01";
import ComponentsNavAndTabs02 from "./components-navs-and-tabs/components-nav-and-tabs-02";
import ComponentsDropdowns01 from "./components-dropdowns/components-dropdowns-01";
import ComponentsModal01 from "./components-modal/components-modal-01";
import ComponentsNavbar01 from "./components-navbar/components-navbar-01";
import SideBarToggle from "../side-bar-toggle";

class BootstrapPage extends DrawerMD {
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
        title: "Layout"
      },
      {
        title: "Containers",
        href: "/bootstrap/layout/containers-1"
      },
      {
        title: "Components"
      },
      {
        title: "Dropdowns",
        href: "/bootstrap/components/dropdowns-1"
      },
      {
        title: "Navbar",
        href: "/bootstrap/components/navbar-1"
      },
      {
        title: "Navs&Tabs 1",
        href: "/bootstrap/components/navs-and-tabs-1"
      },
      {
        title: "Navs&Tabs 2",
        href: "/bootstrap/components/navs-and-tabs-2"
      },
      {
        title: "Modal",
        href: "/bootstrap/components/modal-1"
      },
    ];
    const toggle = new SideBarToggle(this);
    this.add(new SideBar(model, this.pathname, toggle));
    const div0 = new DIV("h-100 d-flex flex-column position-relative");

    let div1 = new DIV("flex-grow-0 flex-shrink-0 d-flex justify-content-center align-items-center");
    div1.setStyleRule("flex-basis", "4rem");
    div1.setStyleRule("font-weight", "700");
    div1.setInnerText("BOOTSTRAP");
    div0.add(div1);

    div1 = new DIV("flex-grow-1 position-relative", div0);

    if (this.pathname.indexOf("/bootstrap/components/dropdowns") === 0) {
      if (this.pathname.indexOf("/dropdowns-1") >= 0) {
        div1.add(new ComponentsDropdowns01(this));
      }
    } else if (this.pathname.indexOf("/bootstrap/components/navbar") === 0) {
      if (this.pathname.indexOf("/navbar-1") >= 0) {
        div1.add(new ComponentsNavbar01(this));
      }
    } else if (this.pathname.indexOf("/bootstrap/components/navs-and-tabs") === 0) {
      if (this.pathname.indexOf("/navs-and-tabs-1") >= 0) {
        div1.add(new ComponentsNavAndTabs01(this));
      }
      if (this.pathname.indexOf("/navs-and-tabs-2") >= 0) {
        div1.add(new ComponentsNavAndTabs02(this));
      }
    } else if (this.pathname.indexOf("/bootstrap/components/modal") === 0) {
      if (this.pathname.indexOf("/modal-1") >= 0) {
        div1.add(new ComponentsModal01(this));
      }
    } else {
      this.pathname = "/bootstrap/layout/containers-1";
      div1.add(new LayoutContainers01(this));
    }

    if ((this.getState().htmlSource) || (this.getState().tsSource)) {
      div1.add(new SourcesPage(this));
    }

    this.add(div0);
  }
}

export default BootstrapPage;
