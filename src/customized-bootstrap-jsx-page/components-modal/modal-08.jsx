import {React} from "@step-js-core/index";
import CloseRoundButton from "../components/close-round-button.jsx";
import {PrimaryButton} from "../components/buttons.jsx";
import "./modal.css";
import MonaLisaPNG from "../../assets/images/mona-lisa.png";

class Modal08 extends React.Component {
  image;
  title;
  grayDescription;
  okButtonText;
  onCancel;
  onOK;

  constructor(props) {
    super(props);
    this.image = props.image;
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.okButtonText = props.okButtonText;
    this.onCancel = props.onCancel;
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
            margin: "0 auto",
            overflow: "hidden"
          }}
        >
          <img
            src={MonaLisaPNG}
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
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%"
                }}
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
                className="mt-4 text-center custom-title"
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

export default Modal08;
