import React from "../../react";
import {CloseRoundButton, PrimaryButton} from "../index";
import "./modal.css";

class Modal0 extends React.Component {
  title;
  grayDescription;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.okButtonText = props.okButtonText;
    this.onOK = props.onOK;
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
                }
              }}
            />
          </div>
          <div
            className="modal-header"
            style={{
              borderBottom: "none"
            }}
          >
            <div
              className="modal-title w-100"
            >
              <h5
                className="text-center custom-title"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body"
          >
            <p
              className="text-center custom-gray-description"
            >
              {this.grayDescription}
            </p>
          </div>
          <div
            className="modal-footer pb-4 px-4"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              className="w-100"
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
}

export default Modal0;
