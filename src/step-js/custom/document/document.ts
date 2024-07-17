import {DIV} from "@step-js-html-5/index";
import "./document.css";

class Document extends DIV {

  constructor(props: any) {
    super(props);
    this.addClassNames("step-js-document");
  }

  mount() {
  }
}

export default Document;
