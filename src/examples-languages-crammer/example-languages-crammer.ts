import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "@step-js-bootstrap/index";
import {crammerStore} from "./crammer-store";
import LessonsPage from "./lessons-page";
import LessonPage from "./lesson-page";

class ExampleLanguagesCrammer extends Container {
  constructor(...params: any) {
    super(...params);
    this.addClassName("h-100");
    crammerStore.startObservingPath(this, "pageName");
  }

  build() {
    if (crammerStore.getState().pageName === "lessons") {
      this.add(new LessonsPage());
    } else if (crammerStore.getState().pageName === "lesson") {
      this.add(new LessonPage());
    }
  }
};

export default ExampleLanguagesCrammer;
