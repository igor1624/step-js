import {DIV, A} from "@step-js-html-5/index";
import {Router} from "@step-js-core/router";
import "./tree.css";

class Tree extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("step-js-tree");
  }
}

namespace Tree {

  // Tree.Node

  export class Node extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-tree-node");
    }
  }

  // Tree.Link

  export class Link extends A {

    constructor(href: string, text: string | undefined, ...params: any) {
      super(...params);
      this.addClassNames("step-js-tree-link");
      this.props.href = href;
      if (text) {
        this.setInnerText(text);
      }
      this.props.onClick = (event: any) => {
        Router.navigateTo(event, this.props.href);
      }
    }
  }
}


export default Tree;
