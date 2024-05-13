import React from "../../react";
import {CloseRoundButton, PrimaryButton, SecondaryButton, RadioButtons, CheckBoxes} from "../index";
import "./modal.css";

class Modal4 extends React.Component {
  title;
  blueDescription;
  grayDescription;
  cancelButtonText;
  onCancel;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.blueDescription = props.blueDescription;
    this.grayDescription = props.grayDescription;
    this.cancelButtonText = props.cancelButtonText;
    this.onCancel = props.onCancel;
    this.okButtonText = props.okButtonText;
    this.onOK = props.onOK;
  }

  componentWillMount() {
    this.setState({
      radioButtons: radioButtons
    });
  }

  render() {
    return (
      <div
        className="modal-dialog"
        style={{
          width: "300px"
        }}
      >
        <div
          className="modal-content"
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
              className="modal-title w-100 px-2"
            >
              <h5
                className="text-left custom-title"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body px-4"
          >
            <p
              className="text-left custom-blue-description"
            >
              {this.blueDescription}
            </p>
            <p
              className="text-left custom-gray-description"
            >
              {this.grayDescription}
            </p>
            <RadioButtons
              className="pt-2"
              radioButtons={this.state.radioButtons}
              onClick={(radioButtonIndex) => this.onClick(radioButtonIndex)}
            />
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-row justify-between"
            style={{
              borderTop: "none"
            }}
          >
            <SecondaryButton
              style={{
                flex: "1 1 0px"
              }}
              text={this.cancelButtonText}
              onClick={() => {
                if (this.onCancel) {
                  this.onCancel();
                }
              }}
            />
            <PrimaryButton
              style={{
                flex: "1 1 0px"
              }}
              text={this.okButtonText}
              onClick={() => {
                if (this.onOK) {
                  this.onOK();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  onClick(radioButtonIndex) {
    console.log("clicked", radioButtonIndex);
    const state = {...this.state};
    for (let i = 0; i < state.radioButtons.length; i++) {
      if (i === radioButtonIndex) {
        state.radioButtons[i].checked = true;
      } else {
        state.radioButtons[i].checked = false;
      }
    }
    this.setState(state);
  }
}

const radioButtons = [
  {
    checked: true,
    text: "20GB, individual storage",
    disabled: false
  },
  {
    checked: false,
    text: "50GB, shared storage",
    disabled: false
  },
];

export default Modal4;
