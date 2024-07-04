import {Store} from "@step-js-core/index";
import NetworkCrammerConnector from "./network-crammer-connector";

class CrammerStore extends Store {
  // sign-in, loading-lessons, lessons, loading-lesson, study, test, settings

  constructor() {
    super();
    this.setState({
      pageName: "sign-in",
      userName: undefined,
      picture: undefined,
      lessons: "loading",
      lessonFileName: undefined,
      lesson: undefined
    });
  }

  signIn(pin: string) {
    const state = this.cloneState();
    state.pageName = "loading-lessons";
    this.setState(state, [
      "pageName",
    ]);
    NetworkCrammerConnector.signIn(pin, () => {
      state.pageName = "lessons";
      state.userName = NetworkCrammerConnector.userName;
      state.picture = NetworkCrammerConnector.picture;
      state.lessons = NetworkCrammerConnector.lessons;
      state.lessonFileName = undefined;
      this.setState(state, [
        "pageName",
        "userName",
        "picture",
        "lessons",
        "lessonFileName"
      ]);
    });
  }
}

const crammerStore = new CrammerStore();

export {
  crammerStore
}
