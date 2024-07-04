import {DIV} from "@step-js-html-5/index";

class LessonsPage extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100");
  }

  mount() {
    this.setInnerHTML("LessonsPage");
  }
}

export default LessonsPage;
