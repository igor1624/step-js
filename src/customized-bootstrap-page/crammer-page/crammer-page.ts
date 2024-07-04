import {DIV} from "@step-js-html-5/index";
import {crammerStore} from "./crammer-store";
import SignInPage from "./pages/sign-in-page";
import LoadingLessonsPage from "./pages/loading-lessons-page";
import LessonsPage from "./pages/lessons-page";
import LoadingLessonPage from "./pages/loading-lesson-page";
import StudyPage from "./pages/study-page";
import TestPage from "./pages/test-page";
import SettingsPage from "./pages/settings-page";
import LessonsButton from "./components/lessons-button";
import StudyButton from "./components/study-button";
import TestButton from "./components/test-button";
import SettingsButton from "./components/settings-button";

class CrammerRouter extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("flex-grow-1");
    crammerStore.startObservingPath(this, "pageName");
  }

  mount() {
    if (crammerStore.getState().pageName === "sign-in") {
      this.add(new SignInPage());
      return;
    }
    if (crammerStore.getState().pageName === "loading-lessons") {
      this.add(new LoadingLessonsPage());
      return;
    }
    if (crammerStore.getState().pageName === "lessons") {
      this.add(new LessonsPage());
      return;
    }
    if (crammerStore.getState().pageName === "loading-lesson") {
      this.add(new LoadingLessonPage());
      return;
    }
    if (crammerStore.getState().pageName === "loading-lesson") {
      this.add(new LoadingLessonPage());
      return;
    }
    if (crammerStore.getState().pageName === "study") {
      this.add(new StudyPage());
      return;
    }
    if (crammerStore.getState().pageName === "test") {
      this.add(new TestPage());
      return;
    }
    if (crammerStore.getState().pageName === "settings") {
      this.add(new SettingsPage());
      return;
    }
  }
}

class CrammerPage extends DIV {
  navigator?: Navigator;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch");
    crammerStore.startObservingPath(this, "pageName");
  }

  mount() {
    this.add(new CrammerRouter());
    this.navigator = new Navigator();
    this.add(this.navigator);
  }

  onObservedStorePathChanged(path: string) {
    this.forceUpdate();
  }
}

class Navigator extends DIV {
  lessonsButton?: LessonsButton;
  studyButton?: StudyButton;
  testButton?: TestButton;
  settingsButton?: SettingsButton;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("bg-body-tertiary");
    this.setStyle({
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "5rem",
    });
  }

  mount() {
    const div = new DIV(this);
    div.setStyle({
      position: "relative",
      width: "26rem",
      height: "100%",
      margin: "auto",
    });
    this.lessonsButton = new LessonsButton();
    div.add(this.lessonsButton);
    this.studyButton = new StudyButton();
    div.add(this.studyButton);
    this.testButton = new TestButton();
    div.add(this.testButton);
    this.settingsButton = new SettingsButton();
    div.add(this.settingsButton);
  }

}

export default CrammerPage;
