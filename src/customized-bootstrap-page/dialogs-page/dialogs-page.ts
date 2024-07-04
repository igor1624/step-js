import {DIV} from "@step-js-html-5/index";

class DialogsPage extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100");
  }

  mount() {
    this.setInnerText("DialogsPage");
  }
}

export default DialogsPage;
