import {Utils, VirtualDOM} from "@step-js-core/index";
import {DIV, I, LI, SPAN, STRONG} from "@step-js-html-5/index";
import {Nav, Toast, ToastContainer, ToastHeader} from "@step-js-bootstrap/index";
import {RoundButton} from "./customized-bootstrap-page/components/buttons";
import ExamplesButton from "./examples-button";
import "./sources-page.css";
import {ScrollablePanel} from "@step-js-custom/index";

class SourcesPage extends DIV {
  parentDIV: DIV;
  lines: [] = [];

  constructor(parentDIV: DIV, ...params: any) {
    super(...params);
    this.addClassNames("h-100 bg-body d-flex flex-column");
    this.setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    });
    this.parentDIV = parentDIV;
    this.setState({
      id: 0
    });
  }

  mount() {
    const nav = new Nav("flex-grow-0 align-items-center border-bottom", this);
    const navLink0 = new Nav.Link("#", "Step JS", nav);
    if (this.getState().id === 0) {
      navLink0.addClassNames("disabled");
    } else {
      navLink0.props.onClick = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
          id: 0
        });
      }
    }
    if (this.parentDIV.getState().htmlSource) {
      const navLink1 = new Nav.Link("#", "HTML", nav);
      if (this.getState().id === 1) {
        navLink1.addClassNames("disabled");
      } else {
        navLink1.props.onClick = (event: any) => {
          event.stopPropagation();
          event.preventDefault();
          this.setState({
            id: 1
          });
        }
      }
    }

    let li = new LI("p-3 flex-grow-1 d-flex justify-content-end", nav);
    const exitButton = new ExamplesButton("fa-regular fa-circle-xmark", "Exit", li);
    exitButton.props.onClick = () => {
      this.parentDIV.setState({
        htmlSource: undefined,
        tsSource: undefined
      });
    };

    let scrollablePanel = new ScrollablePanel("both", "flex-grow-1 p-3 source-page", this);

    this.lines = [];
    if ((this.getState().id === 0) && (this.parentDIV.getState().tsSource)) {
      this.lines = this.parentDIV.getState().tsSource.split("\n");
    }
    if ((this.getState().id === 1) && (this.parentDIV.getState().htmlSource)) {
      this.lines = this.parentDIV.getState().htmlSource.split("\n");
    }
    this.lines.forEach((line: string) => {
      const lineDIV = new DIV("source-line", scrollablePanel);
      const words = this.createWords(line);
      if (words.length === 0) {
        lineDIV.add(new SPAN(undefined).setInnerHTML("&nbsp;"));
      }
      words.forEach((word: string) => {
        const wordSPAN = new SPAN(undefined, "source-line", lineDIV);
        wordSPAN.setInnerHTML(Utils.textToHTML(word) + "&nbsp;");
      });
    });

    let div = new DIV("flex-grow-0 border-top p-3", this);

    const copyButton = new ExamplesButton("fa-solid fa-copy", "Copy");
    div.add(copyButton);
    copyButton.backgroundColor = "var(--bs-yellow)";
    copyButton.props.onClick = () => {
      this.copyTextToClipboard().then(() => {
        const toastContainer = new CopySourceToastContainer(copyButton, "position-fixed bottom-0 end-0 p-3");
        const toast = new Toast(toastContainer);
        const toastHeader = new ToastHeader(toast);
        new I("fa-solid fa-copy me-2", toastHeader).setStyleRule("color", "var(--bs-orange)");
        new STRONG("Step JS", "me-auto", toastHeader);
        const button = new RoundButton(toastHeader);
        button.setSize("1.5rem");
        button.add(new I("fa-regular fa-circle-xmark"));
        button.props.onClick = () => {
          toastContainer.hide();
        };
        const toastBody = new ToastHeader(toast);
        toastBody.setInnerText("Copied to clipboard");
        toastContainer.show();
      });
    };
  }

  createWords(text: string) {
    const words: any = [];
    let i0 = 0;
    let i1 = 0;
    while (i1 < text.length) {
      if (text.charAt(i1) === ' ') {
        words.push(text.substring(i0, i1));
        i0 = i1 + 1;
      }
      i1++;
    }
    if (i1 > i0) {
      words.push(text.substring(i0, i1));
    }
    return words;
  }

  async copyTextToClipboard() {
    try {
      if ((this.getState().id === 0) && (this.parentDIV.getState().tsSource)) {
        await navigator.clipboard.writeText(this.parentDIV.getState().tsSource);
      }
      if ((this.getState().id === 1) && (this.parentDIV.getState().htmlSource)) {
        await navigator.clipboard.writeText(this.parentDIV.getState().htmlSource);
      }
    } catch (error) {
    }
  };
}

class CopySourceToastContainer extends ToastContainer {
  copyButton: ExamplesButton;

  constructor(copyButton: ExamplesButton, ...params: any) {
    super(...params);
    this.copyButton = copyButton;
  }

  show() {
    this.copyButton.getHTMLElement()!.style.visibility = "hidden";
    VirtualDOM.mount(this);
    Utils.wait(1000).then(() => {
      this.hide();
    });
  }

  hide() {
    const htmlElement = this.copyButton.getHTMLElement();
    if (htmlElement) {
      htmlElement.style.visibility = "visible";
    }
    super.hide();
  }
}

export default SourcesPage;
