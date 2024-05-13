import React from "../../react";
import {CloseRoundButton, PrimaryButton, SecondaryButton} from "../index";
import "./modal.css";

class Modal2 extends React.Component {
  title;
  grayDescription;
  cancelButtonText;
  onCancel;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.cancelButtonText = props.cancelButtonText;
    this.onCancel = props.onCancel;
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
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-column align-items-stretch"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              text={this.okButtonText}
              onClick={() => {
                if (this.onOK) {
                  this.onOK();
                }
              }}
            />
            <SecondaryButton
              className="mt-3"
              text={this.cancelButtonText}
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
}

export default Modal2;
