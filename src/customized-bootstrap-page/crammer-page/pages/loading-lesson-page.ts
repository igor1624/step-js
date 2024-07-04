import {DIV} from "@step-js-html-5/index";
import SpinnerFunction from "../components/spinner-function";

class LoadingLessonPage extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex justify-content-center align-items-center");
  }

  mount() {
    this.add(SpinnerFunction("6rem"));
  }
}

export default LoadingLessonPage;
