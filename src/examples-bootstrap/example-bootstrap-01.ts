import "bootstrap/dist/css/bootstrap.min.css";
import {BUTTON, DIV} from "step-js/index";
import { Container } from "@step-js-bootstrap/index";

const ExampleBootstrap01 = () => {
  let container = new Container();
  let div = new DIV(container);
  div.setInnerText("HELLO");

  let button = new BUTTON(container);
  button.setInnerText("PRESS ME");
  button.props.onClick = () => {
    console.log("dfd");
    div.setInnerText("PRESSED");
  };

  return container;
};

export default ExampleBootstrap01;
