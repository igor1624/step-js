import {Network, Store} from "step-js-core";

class CrammerStore extends Store {
  lessonSections: LessonSection[] = [];
  cards: Card[] = [];

  constructor() {
    super();
    this.setState({
      pageName: "lessons",
      lessonsState: "needs_loading",
      lessons: undefined,
      lessonState: "needs_loading",
      lessonName: undefined,
      lesson: undefined
    });
  }

  setPageName(pageName: string) {
    const state = this.cloneState();
    state.pageName = pageName;
    this.setState(state, [
      "pageName"
    ]);
  }

  loadLessons() {
    const state = this.cloneState();
    state.lessonsState = "loading";
    this.setState(state, [
      "lessonsState"
    ]);
    const get = new Network.Get();
    get.setDuration(1000);
    get.setURL("/lessons.txt");
    get.onComplete = (result: any) => {
      const state = this.cloneState();
      if (result) {
        state.lessonsState = "loaded";
        state.lessons = result;
        state.lessonState = "needs_loading";
        state.lessonName = undefined;
        state.lesson = undefined;
      } else {
        state.lessonsState = "error";
        state.lessons = [];
        state.lessonState = "needs_loading";
        state.lessonName = undefined;
        state.lesson = undefined;
      }
      this.setState(state, [
        "lessonsState",
        "lessons",
        "lessonState",
        "lessonName",
        "lesson"
      ]);
    };
    get.fire();
  }

  loadLesson() {
    const state = this.cloneState();
    state.lessonState = "loading";
    this.setState(state, [
      "lessonState"
    ]);
    const get = new Network.Get();
    get.setDuration(1000);
    get.setURL("/" + state.lessonName + ".txt");
    get.onComplete = (result: any) => {
      const state = this.cloneState();
      if (result) {
        state.lessonState = "loaded";
        state.lesson = result;
      } else {
        state.lessonState = "error";
        state.lesson = [];
      }
      this.setState(state, [
        "lessonState",
        "lesson",
      ]);
    };
    get.fire();
  }
}

// lesson section

class LessonSection {
  title? : string;
  cards: Card[] = [];
}

// card

class Card {
  synonym: number;
  synonyms: number;
  language = "";
  side0: any;
  side1: any;
  visibility = 0;

  constructor(card: any) {
    this.synonym = card.synonym;
    this.synonyms = card.synonyms;
    this.language = card.language;
    this.side0 = card.side0;
    this.side1 = card.side1;
  }
}

const crammerStore = new CrammerStore();

export {
  crammerStore,
  LessonSection,
  Card
};
