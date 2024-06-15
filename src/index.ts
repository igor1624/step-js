import "bootstrap/dist/css/bootstrap.min.css";
import {Router, VirtualDOM, Widget, NAV, ASIDE, RouterLink, DIV} from "step-js-core";
import ExampleBootstrap01 from "./examples-bootstrap/example-bootstrap-01";
import {LeftDrawer} from "./custom-components/drawer/drawer";
import {ThemesToggleComponent} from "./custom-components/index";
import ExampleLanguagesCrammer from "./examples-languages-crammer/example-languages-crammer";
import "./style.css";

// SideBar

class SideBar extends ASIDE {

  constructor(...params: any) {
    super(...params);
    this.addClassName("d-flex flex-column");
  }

  build() {
    let div = new DIV("flex-grow-1");
    this.add(div);
    const routerLink = new RouterLink("/example-0", "Example0");
    div.add(routerLink);
    div = new DIV("flex-grow-0");
    this.add(div);
    div.add(new ThemesToggleComponent({
      htmlElement: document.body
    }));
  }
}

// ExamplesRouter

class ExamplesRouter extends Router {
  currentPage: Widget | null;

  constructor(...params: any) {
    super(...params);
    this.setStyle({
      width: "100%",
      height: "100%",
      overflow: "hidden"
    });
    this.currentPage = null;
    this.setState({
      pathname: window.location.pathname,
      search: window.location.search,
    });
  }

  build() {
    /*const drawer = new LeftDrawer("h-100");
    this.add(drawer);
    drawer.add(new SideBar());
    switch (this.state.pathname) {
      case "/example-0":
        drawer.add(ExampleBootstrap01());
        break;
      default:
        drawer.add(new ExampleLanguagesCrammer());
        break;
    }*/
    const div = new DIV("h-100", this);
    div.add(new ExampleLanguagesCrammer());
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

VirtualDOM.mount(ExamplesRouter);
