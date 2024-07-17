// layout
import {
  Container,
  ContainerSM,
  ContainerMD,
  ContainerLG,
  ContainerXL,
  ContainerXXL,
  ContainerFluid
} from "./layout/containers";
// components.buttons
import {
  Btn,
  BtnPrimary,
  BtnSecondary,
  BtnSuccess,
  BtnDanger,
  BtnWarning,
  BtnInfo,
  BtnLight,
  BtnDark,
  BtnLink,
} from "./components/buttons";
// components.button-group
import {
  BtnGroup,
  BtnGroupSM,
  BtnGroupMD,
  BtnGroupLG,
  BtnGroupXL,
  BtnGroupXXL,
  InputGroup,
  BtnToolbar,
  BtnGroupVertical,
} from "./components/button-group";
// components.cards
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "./components/card";
import {
  ListGroup,
  ListGroupItem
} from "./components/list-group";
// components.dropdowns
import Dropdown from "./components/dropdowns";
// components.modal
import Modal from "./components/modal";
// components.navbar
import {
  Navbar,
  NavbarSM,
  NavbarMD,
  NavbarLG,
  NavbarXL,
  NavbarXXL
} from "./components/navbar";
// components.navs-and-tabs
import Nav from "./components/navs-and-tabs";
// components.spinners
import {
  SpinnerBorder
} from "./components/spinners";
// components.toasts
import {
  ToastContainer,
  Toast,
  ToastHeader,
  ToastBody
} from "./components/toasts";
import {Router, Utils} from "@step-js-core/index";

class BootstrapRouter extends Router {

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
    this.setState({
      pathname: window.location.pathname,
      search: window.location.search,
    });
  }

  handleWindowLocationChange() {
    this.setState({
      pathname: window.location.pathname,
      search: window.location.search,
    });
  }

  handleResizeEvent(event: any) {
  }

  static createBootstrapProbes() {
    // breakpoint probes
    if (!document.getElementById("--step-js-sm-visible")) {
      Utils.mountHTMLElement(document.body, "div", {
        id: "--step-js-sm-visible",
        className: "d-none d-sm-block"
      });
    }
    if (!document.getElementById("--step-js-md-visible")) {
      Utils.mountHTMLElement(document.body, "div", {
        id: "--step-js-md-visible",
        className: "d-none d-md-block"
      });
    }
    if (!document.getElementById("--step-js-lg-visible")) {
      Utils.mountHTMLElement(document.body, "div", {
        id: "--step-js-lg-visible",
        className: "d-none d-lg-block"
      });
    }
    if (!document.getElementById("--step-js-xl-visible")) {
      Utils.mountHTMLElement(document.body, "div", {
        id: "--step-js-xl-visible",
        className: "d-none d-xl-block"
      });
    }
    if (!document.getElementById("--step-js-xxl-visible")) {
      Utils.mountHTMLElement(document.body, "div", {
        id: "--step-js-xxl-visible",
        className: "d-none d-xxl-block"
      });
    }
  }
}

export {
  BootstrapRouter,
  Container,
  ContainerSM,
  ContainerMD,
  ContainerLG,
  ContainerXL,
  ContainerXXL,
  ContainerFluid,
  Btn,
  BtnPrimary,
  BtnSecondary,
  BtnSuccess,
  BtnDanger,
  BtnWarning,
  BtnInfo,
  BtnLight,
  BtnDark,
  BtnLink,
  BtnGroup,
  BtnGroupSM,
  BtnGroupMD,
  BtnGroupLG,
  BtnGroupXL,
  BtnGroupXXL,
  InputGroup,
  BtnToolbar,
  BtnGroupVertical,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Modal,
  Nav,
  Navbar,
  NavbarSM,
  NavbarMD,
  NavbarLG,
  NavbarXL,
  NavbarXXL,
  SpinnerBorder,
  ToastContainer,
  Toast,
  ToastHeader,
  ToastBody
}
