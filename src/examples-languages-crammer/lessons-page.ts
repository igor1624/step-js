import {DIV, Widget} from "step-js-core";
import {crammerStore} from "./crammer-store";
import {SpinnerComponent} from "../custom-components";

class LessonsPage extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("h-100");
    crammerStore.startObservingPath(this, "lessonsState");
  }

  build() {
    if ((crammerStore.getState().lessonsState === "needs_loading") || (crammerStore.getState().lessonsState === "loading")) {
      const div = new DIV("h-100 d-flex justify-content-center align-items-center", this);
      div.add(SpinnerComponent({
        size: "6rem"
      }));
      return;
    }
    const div0 = new DIV("h-100 overflow-scroll", this);
    const lessons = crammerStore.getState().lessons;
    lessons.forEach((lesson: any) => {
      const div1 = new DIV(div0);
      div1.setStyleRule("cursor", "pointer");
      let html = "<strong>" + lesson.name + "</strong>";
      lesson.sections.forEach((section: any) => {
        switch (section.type) {
          case "c":
            html += "<br><br>" + section.html;
            break;
          case "y":
            html += "<br><br>" + section.href;
            break;
        }
      });
      div1.setInnerHTML(html);
      div1.props.onClick = () => {
        const state = crammerStore.cloneState();
        state.pageName = "lesson";
        state.lessonState = "needs_loading";
        state.lessonName = lesson.name;
        state.lesson = undefined;
        crammerStore.setState(state, [
          "pageName",
          "lessonState",
          "lessonName",
          "lesson"
        ]);
      }
    });
  }

  componentDidMount() {
    if (crammerStore.getState().lessonsState === "needs_loading") {
      crammerStore.loadLessons();
      return;
    }
  }
}

export default LessonsPage;
