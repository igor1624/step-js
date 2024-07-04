import {React} from "@step-js-core/index";
import "./spinner-component.css";

class SpinnerComponent extends React.Component {
  size;

  constructor(props) {
    super(props);
    if ((props) && (props.size)) {
      this.size = size;
    } else {
      this.size = "6rem";
    }
  }

  render() {
    return (
      <div
        className="spinner-component-wrapper"
        style={{
          width: this.size,
          height: this.size
        }}
      >
        <div
          className="spinner"
          style={{
            width: this.size,
            height: this.size
          }}
        >
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
          <div
            className="spinner-component-dot"
            style={{
              width: this.size,
              height: this.size
            }}
          />
        </div>
      </div>
    );
  }
}

export default SpinnerComponent;
