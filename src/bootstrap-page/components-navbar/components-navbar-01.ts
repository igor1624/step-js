import {
  Card,
  CardHeader,
  ContainerFluid,
  ListGroup,
  ListGroupItem, Nav, Navbar, NavbarLG,
} from "@step-js-bootstrap/index";
import ExamplesButton from "../../examples-button";
import {H4, A, DIV, SPAN} from "@step-js-html-5/index";
import {ScrollablePanel} from "@step-js-custom/index";

class ComponentsNavbar01 extends ScrollablePanel {
  parentDIV: DIV;

  constructor(parentDIV: DIV, ...params: any) {
    super("vertical", ...params);
    this.setStyleRule("position","absolute");
    this.setStyleRule("left", "0");
    this.setStyleRule("top", "0");
    this.setStyleRule("right", "0");
    this.setStyleRule("bottom", "0");
    this.parentDIV = parentDIV;
  }

  mount() {
    const card = new Card("m-3", this);
    const cardHeader = new CardHeader("py-4", card);
    new H4("Navbar", cardHeader);
    const a = new A({
      href: "https://getbootstrap.com/docs/5.3/components/navbar/"
    }, cardHeader);
    a.setInnerText("Bootstrap 5.2 / Components / Navbar");

    const listGroup = new ListGroup(card);
    listGroup.addClassNames("list-group-flush");

    let listGroupItem = new ListGroupItem(listGroup);
    listGroupItem.add(new Example());

    listGroupItem = new ListGroupItem("py-4 d-flex justify-content-end", listGroup);
    const button = new ExamplesButton("fa-solid fa-code", "Code");
    listGroupItem.add(button);
    button.props.onClick = () => {
      this.parentDIV.setState({
        htmlSource: htmlSource,
        tsSource: tsSource
      });
    }
  }
}

class Example extends NavbarLG {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("bg-body-tertiary");
  }

  mount() {
    let containerFluid = new ContainerFluid(this);
    const navbarBrand = new Navbar.Brand("#", containerFluid);
    navbarBrand.setInnerText("Navbar");
    const navbarToggler = new Navbar.Toggler(containerFluid);
    new SPAN(undefined, "navbar-toggler-icon", navbarToggler);
    const navbarCollapse = new Navbar.Collapse(containerFluid);
    const navbarNav = new Navbar.Nav(navbarCollapse);
    navbarNav.addClassNames("me-auto mb-2 mb-lg-0");
    let navItemLink = new Nav.Link("#", "Home", navbarNav);
    navItemLink.addClassNames("active");
  }
}

const htmlSource = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

const tsSource = `

class Example extends Dropdown {

  mount() {
    let dropdownToggle = new Dropdown.ToggleSecondary("Dropdown button");
    this.add(dropdownToggle);
    const dropdownMenu = new Dropdown.Menu(this);
    new Dropdown.Link("#", "Action", dropdownMenu);
    new Dropdown.Link("#", "Another action", dropdownMenu);
    new Dropdown.Link("#", "Something else here", dropdownMenu);
    new Dropdown.Divider(dropdownMenu);
    new Dropdown.Link("#", "Separated link", dropdownMenu);
    new Dropdown.Divider(dropdownMenu);
    const dropdownButton = new Dropdown.ItemButton("Dropdown button", dropdownMenu);
    dropdownButton.props.onClick = () => {
      console.log("Dropdown button pressed");
    }
  }
}
`;

export default ComponentsNavbar01;
