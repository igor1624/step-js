import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "@step-js-bootstrap/index";
import ExamplesButton from "../../examples-button";
import {H4, A, DIV} from "@step-js-html-5/index";
import {ScrollablePanel, ThemesToggler} from "@step-js-custom/index";

class CommonThemesToggler01 extends ScrollablePanel {
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
    new H4("Spinner", cardHeader);
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

class Example extends DIV {

  mount() {
    const div = new DIV("m-5 d-flex justify-content-center align-items-center", this);
    div.add(new ThemesToggler({
      htmlElement: document.body
    }));
  }
}

const htmlSource = null;

const tsSource = `
`;

export default CommonThemesToggler01;
