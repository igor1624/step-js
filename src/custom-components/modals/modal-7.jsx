import React from "../../react";
import {CloseRoundButton, PrimaryButton} from "../index";
import "./modal.css";
import modal7Image from "./modal-7-image";

class Modal7 extends React.Component {
  image;
  title;
  grayDescription;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.image = props.image;
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
          width: "300px",
        }}
      >
        <div
          className="modal-content position-relative overflow-hidden"
        >
          <img
            src={modal7Image}
            alt=""
            width="100%"
            height="auto"
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0
            }}
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

export default Modal7;
