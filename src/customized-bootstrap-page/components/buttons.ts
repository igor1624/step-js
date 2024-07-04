import ActiveWidget from "./active-widget";
import "./buttons.css";

// button

class Button extends ActiveWidget {

  constructor(...params: any) {
    super("button", ...params);
    this.addClassNames("button");
  }
}

// round button

class RoundButton extends ActiveWidget {

  constructor(...params: any) {
    super("button", ...params);
    this.addClassNames("round-button");
    this.props.style  = this.props.style || {};
    this.props.style.width = "4rem";
    this.props.style.height = "4rem";
  }

  setSize(size: string) {
    this.props.style.width = size;
    this.props.style.height = size;
    this.setStyleRule("width", size);
    this.setStyleRule("height", size);
  }
}

export {
  Button,
  RoundButton,
}
