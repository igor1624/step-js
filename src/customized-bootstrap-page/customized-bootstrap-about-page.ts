import {DIV} from "@step-js-html-5/index";

class CustomizedBootstrapAboutPage extends DIV {

  constructor(...params: any) {
    super(...params);
  }

  mount() {
    this.setInnerText("CustomizedBootstrapAboutPage");
  }

}

export default CustomizedBootstrapAboutPage;
