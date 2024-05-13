import {Widget} from "step-js/index";

// Container

class Container extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("container");
  }
}

// ContainerFluid

class ContainerFluid extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassName("container-fluid");
  }
}

export {
  Container,
  ContainerFluid
};
