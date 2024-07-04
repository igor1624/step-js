import "bootstrap/dist/css/bootstrap.min.css";
import {Router, VirtualDOM, Widget} from "@step-js-core/index";
import {ContainerFluid, Nav, Navbar, NavbarLG, NavbarMD} from "@step-js-bootstrap/index";
import GetStartedPage from "./get-started-page/get-started-page";
import {DIV, IMG, SPAN} from "@step-js-html-5/index";
import BootstrapPage from "./bootstrap-page/bootstrap-page";
import CustomizedBootstrapPage from "./customized-bootstrap-page/customized-bootstrap-page";
import CrammerPage from "./customized-bootstrap-page/crammer-page/crammer-page";
import ComponentsNavAndTabs from "./bootstrap-page/components-navs-and-tabs/components-nav-and-tabs";
import Utils from "@step-js-core/utils";
import ComponentsDropdowns from "./bootstrap-page/components-dropdowns/components-dropdowns";
import ComponentsNavbar from "./bootstrap-page/components-navbar/components-navbar";
import ComponentsModal from "./customized-bootstrap-jsx-page/components-modal/components-modal";

import "./index.css";
import "./step-js-examples.css";
import CustomizedBootstrapJSXPage from "./customized-bootstrap-jsx-page/customized-bootstrap-jsx-page";

class ExamplesRouter extends Router {
  currentPage: Widget | null;

  constructor(...params: any) {
    super(...params);
    this.setStyle({
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    });
    this.currentPage = null;
    this.setState({
      pathname: window.location.pathname,
      search: window.location.search,
    });
  }

  mount() {
    //VirtualDOM.mount(new CrammerPage());
    //const p = new ComponentsNavAndTabs();p.addClassNames("h-100");
    //const p = new ComponentsNavbar();p.addClassNames("h-100");
    //const p = new ComponentsDropdowns();p.addClassNames("h-100");
    //const p = new BootstrapPage("layout/containers");
    //const p = new JsxModals();
    //this.add(p);
    //return;

    const navbar = new NavbarMD("border-bottom flex-grow-0 p-3", this);
    const container = new ContainerFluid("mx-1 position-relative", navbar);
    container.setStyleRule("--bs-gutter-x", "0");
    const brand = new Navbar.Brand("/get-started", "bg-body-secondary d-flex justify-content-center align-items-center", container);
    brand.setStyle({
      width: "3rem",
      height: "3rem",
      borderRadius: "50%"
    });
    const svg = require("./assets/images/woodpecker.svg");
    const img = new IMG(svg, brand);
    img.setStyle({
      width: "2rem",
      height: "auto"
    });
    const div = new DIV("page-title-collapse", container);
    let navbarNav = new Navbar.Nav("bg-body me-auto mb-0 page-title-navbar-nav", div);
    let title = "Bootstrap";
    if (this.state.pathname.indexOf("/customized-bootstrap-jsx") === 0) {
      title = "Customized Bootstrap + JSX";
    } else if (this.state.pathname.indexOf("/customized-bootstrap") === 0) {
      title = "Customized Bootstrap";
    } else if (this.state.pathname.indexOf("/get-started") === 0) {
      title = "Get Started";
    }
    new Nav.Link("#", title, "disabled", navbarNav);

    const toggler = new Navbar.Toggler(container);
    toggler.add(new SPAN(undefined, "navbar-toggler-icon"));

    const collapse = new Navbar.Collapse(container);
    navbarNav = new Navbar.Nav("bg-body me-auto mb-2 mb-md-0", collapse);

    const bootstrapLink = new Nav.Link("/bootstrap", "Bootstrap", navbarNav);

    const customizedBootstrapLink = new Nav.Link("/customized-bootstrap", "Customized Bootstrap", navbarNav);

    const customizedBootstrapJSXLink = new Nav.Link("/customized-bootstrap-jsx", "Customized Bootstrap + JSX", navbarNav);

    const getStartedLink = new Nav.Link("/get-started", "Get Started", navbarNav);

    if (this.state.pathname.indexOf("/customized-bootstrap-jsx") === 0) {
      customizedBootstrapJSXLink.addClassNames("disabled");
      this.add(new CustomizedBootstrapJSXPage(this.state.pathname));
    } else if (this.state.pathname.indexOf("/get-started") === 0) {
      getStartedLink.addClassNames("disabled");
      this.add(new GetStartedPage());
    } else if (this.state.pathname.indexOf("/customized-bootstrap") === 0) {
      customizedBootstrapLink.addClassNames("disabled");
      this.add(new CustomizedBootstrapPage(this.state.pathname));
    } else {
      bootstrapLink.addClassNames("disabled");
      this.add(new BootstrapPage(this.state.pathname));
    }
  }

  handleWindowLocationChange() {
    this.setState({
      pathname: window.location.pathname,
      search: window.location.search,
    });
  }

  handleResizeEvent(event: any) {
  }
}

VirtualDOM.mount(new ExamplesRouter());


/*import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapExamples from "./bootstrap-examples/bootstrap-examples";
import DesignStudio from "./design-studio/design-studio";
import reportWebVitals from "./reportWebVitals";
import {Tabs} from "antd";
import HomePage from "./home/home-page";
import CustomExamples from "./custom-examples/custom-examples";
import GetStartedPage from "./get-started/get-started-page";
import "./index.css";

const tabItems = [
  {
    label: "Home",
    key: "home",
    children: <HomePage />
  },
  {
    label: "Bootstrap",
    key: "bootstrap",
    children: <BootstrapExamples />
  },
  {
    label: "Custom",
    key: "custom",
    children: <CustomExamples />
  },
  {
    label: "Design Studio",
    key: "design-studio",
    children: <DesignStudio />
  },
  {
    label: "Get Started",
    key: "get-started",
    children: <GetStartedPage />
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Tabs
      style={{
        height: "100%",
        padding: "0 1rem 0 1rem"
      }}
      items={tabItems}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
