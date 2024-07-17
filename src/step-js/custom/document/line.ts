import "./line-div.css";
import {DIV} from "@step-js-html-5/index";
import TextEngine from "@step-js-custom/document/text-engine";
import SPAN from "@step-js-html-5/span";

class Line extends DIV {
  words: string[];

  constructor(props: any) {
    super(props);
    this.addClassNames("step-js-line");
    this.words = TextEngine.createWords(props.text);
  }

  mount() {
    this.words.forEach((word: string) => {
      new SPAN(word, this);
    });
  }
}

export default Line;
