import {LI, UL} from "@step-js-html-5/index";

class ListGroup extends UL {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("list-group");
  }

}

class ListGroupItem extends LI {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("list-group-item");
  }
}

export {
  ListGroup,
  ListGroupItem
}
