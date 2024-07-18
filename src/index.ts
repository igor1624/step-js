import "bootstrap/dist/css/bootstrap.min.css";
import {Router, VirtualDOM, Widget} from "@step-js-core/index";
import {BootstrapRouter, ContainerFluid, Nav, Navbar, NavbarLG, NavbarMD} from "@step-js-bootstrap/index";
import GetStartedPage from "./get-started-page/get-started-page";
import {DIV, IMG, SPAN} from "@step-js-html-5/index";
import BootstrapPage from "./bootstrap-page/bootstrap-page";
import CustomizedBootstrapPage from "./customized-bootstrap-page/customized-bootstrap-page";
import Utils from "@step-js-core/utils";

import "./index.css";
import "./step-js-examples.css";
import CustomizedBootstrapJSXPage from "./customized-bootstrap-jsx-page/customized-bootstrap-jsx-page";
import LayoutContainers01 from "./bootstrap-page/layout-containers/layout-containers-01";

class ExamplesRouter extends BootstrapRouter {
  currentPage: Widget | null;

  constructor(...params: any) {
    super(...params);
    this.currentPage = null;
  }

  mount() {
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
}

VirtualDOM.mount(new ExamplesRouter(), document.getElementById("step-js-root"));
