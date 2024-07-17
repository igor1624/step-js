import {
  Card,
  CardHeader,
  Dropdown,
  ListGroup,
  ListGroupItem,
} from "@step-js-bootstrap/index";
import ExamplesButton from "../../examples-button";
import {H4, A, DIV} from "@step-js-html-5/index";
import {ScrollablePanel} from "@step-js-custom/index";

class ComponentsDropdowns01 extends ScrollablePanel {
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
    new H4("Dropdown", cardHeader);
    const a = new A({
      href: "https://getbootstrap.com/docs/5.2/components/dropdowns"
    }, cardHeader);
    a.setInnerText("Bootstrap 5.2 / Components / Dropdowns");

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
    const dropdownButton = new Dropdown.Button("Dropdown button", dropdownMenu);
    dropdownButton.props.onClick = () => {
      console.log("Dropdown button pressed");
    }
  }
}

const htmlSource = `
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><button class="dropdown-item" type="button">Button dropdown</button></li>
  </ul>
</div>
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

export default ComponentsDropdowns01;
