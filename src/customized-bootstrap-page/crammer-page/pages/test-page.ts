import {DIV} from "@step-js-html-5/index";

class TestPage extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("flex-grow-1");
  }

  mount() {
    this.setInnerHTML("TestPage");
  }
}

export default TestPage;
