import {
  Card,
  CardHeader,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Nav,
} from "@step-js-bootstrap/index";
import ExamplesButton from "../../examples-button";
import {H4, A, DIV} from "@step-js-html-5/index";
import {ScrollablePanel} from "@step-js-custom/index";

class ComponentsNavAndTabs01 extends ScrollablePanel {
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
    new H4("Horizontal Nav", cardHeader);
    const a = new A({
      href: "https://getbootstrap.com/docs/5.2/components/navs-tabs"
    }, cardHeader);
    a.setInnerText("Bootstrap 5.2 / Components / Navs & Tabs");

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

class Example extends Nav {

  mount() {
    this.add(new Nav.Link("#", "Active", "active"));
    const dropdown = new Nav.Dropdown(this);
    dropdown.add(new Nav.DropdownToggle("Dropdown"));
    const menu = new Dropdown.Menu(dropdown);
    menu.add(new Dropdown.Link("#", "Action"));
    menu.add(new Dropdown.Link("#", "Another action"));
    menu.add(new Dropdown.Link("#", "Something else here"));
    menu.add(new Dropdown.Divider());
    menu.add(new Dropdown.Link("#", "Separated link"));
    menu.add(new Dropdown.Divider());
    const dropdownButton = new Dropdown.Button("Dropdown button", menu);
    dropdownButton.props.onClick = () => {
      console.log("Dropdown button pressed");
    };
    this.add(new Nav.Link("#", "Disabled", "disabled"));
  }
}

const htmlSource = `
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" href="#">Action</a>
      </li>
      <li>
        <a class="dropdown-item" href="#">Another action</a>
      </li>
      <li>
        <a class="dropdown-item" href="#">Something else here</a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li>
        <a class="dropdown-item" href="#">Separated link</a>
      </li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
`;

const tsSource = `
class Example extends Nav {

  mount() {
    this.add(new Nav.Link("#", "Active", "active"));
    const dropdown = new Nav.Dropdown(this);
    dropdown.add(new Nav.DropdownToggle("Dropdown"));
    const menu = new Dropdown.Menu(dropdown);
    menu.add(new Dropdown.Link("#", "Action"));
    menu.add(new Dropdown.Link("#", "Another action"));
    menu.add(new Dropdown.Link("#", "Something else here"));
    menu.add(new Dropdown.Divider());
    menu.add(new Dropdown.Link("#", "Separated link"));
    menu.add(new Dropdown.Divider());
    const dropdownButton = new Dropdown.Button("Dropdown button", menu);
    dropdownButton.props.onClick = () => {
      console.log("Dropdown button pressed");
    };
    this.add(new Nav.Link("#", "Disabled", "disabled"));
  }
}
`;

export default ComponentsNavAndTabs01;
