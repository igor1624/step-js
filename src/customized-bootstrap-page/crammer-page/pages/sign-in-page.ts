import {DIV} from "@step-js-html-5/index";
import SectionTitleFunction from "../components/section-title-function";
import WavesSVG from "../inline-vector-images/waves";
import {crammerStore} from "../crammer-store";
import {RoundButton} from "../../components/buttons";
import WoodpeckerSVG from "../inline-vector-images/woodpecker-svg";

class SignInPage extends DIV {
  pin = "";
  pinDiv0?: DIV;
  pinDiv1?: DIV;
  pinDiv2?: DIV;
  pinDiv3?: DIV;

  constructor() {
    super("h-100 flex-grow-1 position-relative overflow-hidden bg-body", {
      style: {
        maxWidth: "390px",
        margin: "0 auto",
      }
    });
  }

  mount() {
    let div0 = new DIV("mb-3", this);
    div0.setInnerHTML(WavesSVG());

    div0 = new DIV("bg-body p-2", {
      style: {
        position: "absolute",
        left: "1rem",
        top: "1rem",
        width: "6rem",
        height: "6rem",
        borderRadius: "50%"
      }
    }, this);
    div0.setInnerHTML(WoodpeckerSVG());

    div0 = SectionTitleFunction();
    this.add(div0);
    const div1 = new DIV(div0);
    div1.setInnerText("Enter pin");

    div0 = new DIV("mt-4 d-flex justify-content-center", this);
    this.pinDiv0 = new DIV("border border-secondary", {
      style: {
        margin: "0.5rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }
    }, div0);
    this.pinDiv1 = new DIV("border border-secondary", {
      style: {
        margin: "0.5rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }
    }, div0);
    this.pinDiv2 = new DIV("border border-secondary", {
      style: {
        margin: "0.5rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }
    }, div0);
    this.pinDiv3 = new DIV("border border-secondary", {
      style: {
        margin: "0.5rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }
    }, div0);

    //let div12 = new DIV("d-flex justify-content-center", this);div12.add(new CalendarComponent());

    div0 = new DIV("mt-4 d-flex flex-column align-items-center", this);

    for (let i0 = 0; i0 < 3; i0++) {
      let div1 = new DIV("m-1 d-flex", div0);
      for (let i1 = 0; i1 < 3; i1++) {
        const roundButton = new RoundButton("m-2", div1);
        roundButton.setInnerText("" + (i0 * 3 + i1 + 1))
        roundButton.props.onClick = () => {
          this.pin += "" + (i0 * 3 + i1 + 1);
          this.updatePinDivs();
        }
      }
    }
    div0 = new DIV("m-1 d-flex justify-content-center", this);
    const roundButton = new RoundButton("m-2", div0);
    roundButton.setInnerText("0")
    roundButton.props.onClick = () => {
      this.pin += "0";
      this.updatePinDivs();
    };
  }

  updatePinDivs() {
    if (this.pin.length >= 1) {
      this.pinDiv0!.addClassNames("bg-secondary");
    }
    if (this.pin.length >= 2) {
      this.pinDiv1!.addClassNames("bg-secondary");
    }
    if (this.pin.length >= 3) {
      this.pinDiv2!.addClassNames("bg-secondary");
    }
    if (this.pin.length >= 4) {
      this.pinDiv3!.addClassNames("bg-secondary");
      crammerStore.signIn(this.pin);
    }
  }
}

export default SignInPage;
