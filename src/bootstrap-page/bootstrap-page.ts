import {DrawerSM} from "@step-js-custom/index";
import ComponentsModal from "./components-modal/components-modal";
import SideBar from "../side-bar";
import LayoutContainers from "./layout-containers/layout-containers";
import {Widget} from "@step-js-core/index";
import ComponentsDropdowns from "./components-dropdowns/components-dropdowns";
import ComponentsNavAndTabs from "./components-navs-and-tabs/components-nav-and-tabs";
import ComponentsNavbar from "./components-navbar/components-navbar";

class BootstrapPage extends DrawerSM {
  pathname: string;

  constructor(pathname: string, ...params: any) {
    super("left", ...params);
    this.addClassNames("h-100");
    this.pathname = pathname;
  }

  mount() {
    let right: Widget;
    if (this.pathname.indexOf("/bootstrap/components/dropdowns") === 0) {
      right = new ComponentsDropdowns(this.pathname);
    } else if (this.pathname.indexOf("/bootstrap/components/navbar") === 0) {
      right = new ComponentsNavbar(this.pathname);
    } else if (this.pathname.indexOf("/bootstrap/components/navs-and-tabs") === 0) {
      right = new ComponentsNavAndTabs(this.pathname);
    } else if (this.pathname.indexOf("/bootstrap/components/modal") === 0) {
      right = new ComponentsModal(this.pathname);
    } else {
      this.pathname = "/bootstrap/layout/containers-1";
      right = new LayoutContainers(this.pathname);
    }
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
    this.add(new SideBar(model, this.pathname));
    if (right) {
      this.add(right);
    }
  }
}

export default BootstrapPage;
