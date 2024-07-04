import {Utils} from "@step-js-core/index";

class NetworkCrammerConnector {
  static pin = "";
  static userName = "";
  static picture = "";
  static lessons: any[] = [];

  static signIn(pin: string, callbackFunction: Function) {
    Utils.wait(3000).then(() => {
      this.userName = "User";
      this.picture = "./images/user.png";
      this.lessons = lessons;
      callbackFunction();
    });
  }
}

const lessons = [
  {
    "name": "2024.06.26",
    "sections": [
      {
        "type": "c",
        "html": "English"
      }
    ]
  }
];

export default NetworkCrammerConnector;
