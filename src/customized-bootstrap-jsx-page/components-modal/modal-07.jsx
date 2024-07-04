import {React} from "@step-js-core/index";
import CloseRoundButton from "../components/close-round-button.jsx";
import {
  PrimaryButton,
  SecondaryButton
} from "../components/buttons.jsx";
import "./modal.css";

class Modal07 extends React.Component {
  title;
  blueDescription;
  blackDescription;
  grayDescription;
  smallDescription;
  cancelButtonText;
  onCancel;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.blueDescription = props.blueDescription;
    this.blackDescription = props.blackDescription;
    this.grayDescription = props.grayDescription;
    this.smallDescription = props.smallDescription;
    this.cancelButtonText = props.cancelButtonText;
    this.onCancel = props.onCancel;
    this.okButtonText = props.okButtonText;
    this.onOK = props.onOK;
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
              className="text-left custom-black-description"
            >
              {this.blackDescription}
            </p>
            <p
              className="text-left custom-gray-description"
            >
              {this.grayDescription}
            </p>
            <p
              className="text-left custom-small-description"
            >
              {this.smallDescription}
            </p>
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
}

export default Modal07;
