import {DIV} from "@step-js-html-5/index";

// BtnGroup

class BtnGroup extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group");
    this.props.role = "group";
  }
}

// BtnGroupSM

class BtnGroupSM extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group btn-group-sm");
    this.props.role = "group";
  }
}

// BtnGroupMD

class BtnGroupMD extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group btn-group-md");
    this.props.role = "group";
  }
}

// BtnGroupLG

class BtnGroupLG extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group btn-group-lg");
    this.props.role = "group";
  }
}

// BtnGroupXL

class BtnGroupXL extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group btn-group-xl");
    this.props.role = "group";
  }
}

// BtnGroupXXL

class BtnGroupXXL extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group btn-group-xxl");
    this.props.role = "group";
  }
}

// InputGroup

class InputGroup extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("input-group");
  }
}

// BtnToolbar

class BtnToolbar extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-toolbar");
    this.props.role = "toolbar";
  }
}

// BtnGroupVertical

class BtnGroupVertical extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("btn-group-vertical");
    this.props.role = "group";
  }
}

export {
  BtnGroup,
  BtnGroupSM,
  BtnGroupMD,
  BtnGroupLG,
  BtnGroupXL,
  BtnGroupXXL,
  InputGroup,
  BtnToolbar,
  BtnGroupVertical,
}
