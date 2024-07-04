import {React} from "@step-js-core/index";
import CloseRoundButton from "../components/close-round-button.jsx";
import {
  PrimaryButton,
  SecondaryButton
} from "../components/buttons.jsx";
import CheckBoxes from "../components/check-boxes.jsx";
import "./modal.css";

class Modal04 extends React.Component {
  title;
  grayDescription;
  onCancel;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.onCancel = props.onCancel;
    this.onOK = props.onOK;
  }

  componentWillMount() {
    this.setState({
      checkBoxes: checkBoxes
    });
  }

  render() {
    return (
      <div
        className="modal-dialog"
      >
        <div
          className="modal-content"
          style={{
            width: "300px",
            margin: "0 auto"
          }}
        >
          <div
            className="d-flex justify-content-end m-1"
          >
            <CloseRoundButton
              onClick={() => {
                if (this.onCancel) {
                  this.onCancel();
                }}
              }
            />
          </div>
          <div
            className="modal-header"
            style={{
              borderBottom: "none"
            }}
          >
            <div
              className="modal-title w-100 px-4"
            >
              <h5
                className="text-center custom-title"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body px-4"
          >
            <p
              className="text-center custom-gray-description"
            >
              {this.grayDescription}
            </p>
            <CheckBoxes
              className="pt-2"
              checkBoxes={this.state.checkBoxes}
              onClick={(checkBoxIndex) => this.onClick(checkBoxIndex)}
            />
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-column align-items-stretch"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              text="OK"
              onClick={() => {
                if (this.onOK) {
                  this.onOK();
                }
              }}
            />
            <SecondaryButton
              className="mt-3"
              text="Cancel"
              onClick={() => {
                if (this.onCancel) {
                  this.onCancel();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  onClick(checkBoxIndex) {
    console.log("clicked", checkBoxIndex);
    const state = {...this.state};
    state.checkBoxes[checkBoxIndex].checked = !state.checkBoxes[checkBoxIndex].checked;
    this.setState(state);
  }
}

const checkBoxes = [
  {
    checked: true,
    text: "I read the documentation",
    disabled: false
  },
  {
    checked: false,
    text: "I want to get updates",
    disabled: false
  },
];

export default Modal04;
