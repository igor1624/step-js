import {VirtualDOM} from "@step-js-core/index";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "@step-js-bootstrap/index";
import {H4, A, DIV} from "@step-js-html-5/index";
import ExamplesButton from "../../examples-button";
import Modal01 from "./modal-01.jsx";
import {ScrollablePanel} from "@step-js-custom/index";

class ComponentsModal01 extends ScrollablePanel {
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
    new H4("Modal / File shared", cardHeader);
    const a = new A({
      href: "https://www.figma.com/file/pLzezNSNm0MenZKcai7kKr/Auto-Layout-Dialog-(Community)-(Community)?type=design&node-id=0-1&mode=design&t=V7YGXDT2al6dBf4j-0"
    }, cardHeader);
    a.setInnerText("/ jsx / modals / modal-1");

    const listGroup = new ListGroup(card);
    listGroup.addClassNames("list-group-flush");

    let listGroupItem = new ListGroupItem("py-3 d-flex justify-content-center bg-body-secondary", listGroup);
    const modal = new DIV("modal custom-modal");
    listGroupItem.add(modal);
    modal.setStyleRule("z-index", "inherit");
    modal.add(new Example());

    listGroupItem = new ListGroupItem("py-4 d-flex justify-content-between", listGroup);
    const runButton = new ExamplesButton("fas fa-running", "Run");
    listGroupItem.add(runButton);
    runButton.backgroundColor = "var(--bs-yellow)";
    runButton.props.onClick = () => {
      this.showExample();
    };
    const codeButton = new ExamplesButton("fa-solid fa-code", "Code");
    listGroupItem.add(codeButton);
    codeButton.props.onClick = () => {
      this.parentDIV.setState({
        htmlSource: htmlSource,
        tsSource: tsSource
      });
    };
  }

  showExample() {
    const div = new DIV("modal");
    div.setStyle({
      display: "block",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    });
    div.props.onClick = (event: any) => {
      if (event.target === div.getHTMLElement()) {
        VirtualDOM.unmount(div);
      }
    };
    const example = new Example();
    div.add(example);
    example.div = div;
    VirtualDOM.mount(div);
  }
}

class Example extends DIV {
  div: any;

  constructor(...params: any) {
    super(...params);
  }

  mount() {
    const props = {
      title: "File shared",
      grayDescription: "All team members will be able to read, write and share this file.",
      okButtonText: "OK",
      onCancel: () => {
        if (this.div) {
          this.close();
        } else {
          console.log("cancel");
        }
      },
      onOK: () => {
        if (this.div) {
          this.close();
        } else {
          console.log("ok");
        }
      }
    };
    this.add(new Modal01(props));
  }

  close() {
    VirtualDOM.unmount(this.div);
  }
}

const htmlSource = null;

const tsSource = `
`;

export default ComponentsModal01;
