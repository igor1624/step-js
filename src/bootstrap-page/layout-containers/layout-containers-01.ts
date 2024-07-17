import {
  Card,
  CardHeader,
  ContainerFluid, ContainerLG, ContainerMD, ContainerSM, ContainerXL, ContainerXXL,
  ListGroup,
  ListGroupItem, Navbar,
} from "@step-js-bootstrap/index";
import ExamplesButton from "../../examples-button";
import {H4, A, DIV} from "@step-js-html-5/index";
import {ScrollablePanel} from "@step-js-custom/index";

class LayoutContainers01 extends ScrollablePanel {
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
      href: "https://getbootstrap.com/docs/5.3/layout/containers/"
    }, cardHeader);
    a.setInnerText("Bootstrap 5.3 / Layout / Containers");

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

class Example extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("bg-body-tertiary");
  }

  mount() {
    this.add(new ContainerSM("bg-secondary my-3 p-5")).setInnerText("100% wide until small breakpoint");
    new ContainerMD("bg-secondary my-3 p-5", this).setInnerText("100% wide until medium breakpoint");
    new ContainerLG("bg-secondary my-3 p-5", this).setInnerText("100% wide until large breakpoint");
    new ContainerXL("bg-secondary my-3 p-5", this).setInnerText("100% wide until extra large breakpoint");
    new ContainerXXL("bg-secondary my-3 p-5", this).setInnerText("100% wide until extra extra large breakpoint");
    new ContainerFluid("bg-secondary my-3 p-5", this).setInnerText("container fluid");
  }
}

const htmlSource = `
  <div class="container-sm">100% wide until small breakpoint</div>
  <div class="container-md">100% wide until medium breakpoint</div>
  <div class="container-lg">100% wide until large breakpoint</div>
  <div class="container-xl">100% wide until extra large breakpoint</div>
  <div class="container-xxl">100% wide until extra extra large breakpoint</div>
  <div class="container-fluid">container fluid</div>
`;

const tsSource = `

class Example extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("bg-body-tertiary");
  }

  mount() {
    new ContainerSM("bg-secondary my-3", this).setInnerText("100% wide until small breakpoint");
    new ContainerMD("bg-secondary my-3", this).setInnerText("100% wide until medium breakpoint");
    new ContainerLG("bg-secondary my-3", this).setInnerText("100% wide until large breakpoint");
    new ContainerXL("bg-secondary my-3", this).setInnerText("100% wide until extra large breakpoint");
    new ContainerXXL("bg-secondary my-3", this).setInnerText("100% wide until extra extra large breakpoint");
    new ContainerFluid("bg-secondary my-3", this).setInnerText("container fluid");
  }
}
`;

export default LayoutContainers01;
