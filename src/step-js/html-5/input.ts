import {Widget} from "./index";

// INPUT

class INPUT extends Widget {

  constructor(type: "text" | "password" | "checkbox", ...params: any) {
    super("input", ...params);
    this.props.type = type;
  }

  getValue() {
    if (this.getHTMLElement()) {
      return (this.getHTMLElement() as any).value as string;
    }
    return this.props.value;
  }

  setValue(value: string) {
    this.props.value = value;
    if (this.getHTMLElement()) {
      (this.getHTMLElement() as any).value = value;
    }
  }
}

export default INPUT;
