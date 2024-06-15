import {DIV, TABLE, Widget} from "step-js-core";
import {crammerStore} from "./crammer-store";
import {SpinnerComponent} from "../custom-components";

class LessonPage extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("h-100");
    this.setState({
      cards: "cards43"
    });
    crammerStore.startObservingPath(this, "lessonState");
  }

  build() {
    if ((crammerStore.getState().lessonState === "needs_loading") || (crammerStore.getState().lessonState === "loading")) {
      const div = new DIV("h-100 d-flex justify-content-center align-items-center", this);
      div.add(SpinnerComponent({
        size: "6rem"
      }));
      return;
    }
    const div0 = new DIV("h-100 overflow-scroll", this);
    const table = new TABLE("w-100", div0);
    const tbody = table.addTBODY();
    const lesson = crammerStore.getState().lesson;
    for (let i0 = 0; i0 < lesson.sections.length; i0++) {
      const section = lesson.sections[i0];
      let tr = tbody.addTR();
      let td = tr.addTD();
      td.props.colspan = 2;
      if (section.type === "c") {
        td.addClassName("bg-warning p-3");
        td.setInnerHTML(section.html);
      }
      if (section.type === "y") {
        td.addClassName("bg-warning p-3");
        td.setInnerHTML(section.href);
      }
      const cards = section[this.getState().cards];
      for (let i1 = 0; i1 < cards.length; i1++) {
        const card = cards[i1];
        tr = tbody.addTR();
        td = tr.addTD();
        td.setStyleRule("width", "50%");
        let html = card.left;
        if (card.leftExample) {
          html += card.leftExample;
        }
        td.setInnerHTML(html);
        html = card.right;
        if (card.rightExample) {
          html += card.rightExample;
        }
        td = tr.addTD();
        td.setStyleRule("width", "50%");
        td.setInnerHTML(html);
      }
    }
  }

  componentDidMount() {
    if (crammerStore.getState().lessonState === "needs_loading") {
      crammerStore.loadLesson();
      return;
    }
  }
}

export default LessonPage;
