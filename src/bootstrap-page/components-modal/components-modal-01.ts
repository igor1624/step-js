import {A, P, DIV, H4, H5} from "@step-js-html-5/index";
import {Card, CardHeader} from "@step-js-bootstrap/components/card";
import {ListGroup, ListGroupItem} from "@step-js-bootstrap/components/list-group";
import ExamplesButton from "../../examples-button";
import {
  BtnPrimary,
  BtnSecondary,
  Modal,
} from "@step-js-bootstrap/index";
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
    new H4("Modal", cardHeader);
    const a = new A({
      href: "https://getbootstrap.com/docs/5.2/components/modal/"
    }, cardHeader);
    a.setInnerText("/ Bootstrap 5.2 / Components / Modal");

    const listGroup = new ListGroup(card);
    listGroup.addClassNames("list-group-flush");

    let listGroupItem = new ListGroupItem("py-3 d-flex justify-content-center bg-body-secondary", listGroup);
    const example = new Example(true);
    example.setStyle({
      display: "inline-block",
      position: "relative",
      width: "100%",
      height: "auto",
      zIndex: "inherit"
    });
    listGroupItem.add(example);

    listGroupItem = new ListGroupItem("py-4 d-flex justify-content-between", listGroup);
    const runButton = new ExamplesButton("fas fa-running", "Run");
    listGroupItem.add(runButton);
    runButton.backgroundColor = "var(--bs-yellow)";
    runButton.props.onClick = () => {
      new Example(false).show();
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
}

class Example extends Modal {
  view: boolean;

  constructor(view: boolean, ...params: any) {
    super(...params);
    this.view = view;
  }

  mount() {
    const dialog = new Modal.Dialog(this);
    const content = new Modal.Content(dialog);
    const header = new Modal.Header(content);
    new H5("Modal Title", header);
    const btnClose = new Modal.BtnClose(header);
    if (this.view) {
      btnClose.props.onClick = () => {
      }
    }
    const body = new Modal.Body(content);
    new P("Modal body text goes here", body);
    const footer = new Modal.Footer(content);
    const closeBtn = new BtnSecondary("Close", footer);
    if (!this.view) {
      closeBtn.props.onClick = () => {
        this.hide();
      }
    }
    const saveChangesBtn = new BtnPrimary("Save Changes", footer);
    if (!this.view) {
      saveChangesBtn.props.onClick = () => {
        this.hide();
      }
    }
  }
}

const htmlSource = `
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;

const tsSource = `
class Example extends Modal {

  mount() {
    const dialog = new Modal.Dialog(this);
    const content = new Modal.Content(dialog);
    const header = new Modal.Header(content);
    new H5("Modal Title", header);
    new Modal.BtnClose(header);
    const body = new Modal.Body(content);
    new P("Modal body text goes here", body);
    const footer = new Modal.Footer(content);
    new BtnSecondary("Close", footer);
    new BtnPrimary("Save Changes", footer);
  }
}
`;

export default ComponentsModal01;
