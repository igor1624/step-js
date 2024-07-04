import {React} from "@step-js-core/index";
import "./spinner-function.css";

const SpinnerFunction = (size: string) => {
  return (
    <div
      className="spinner-component-wrapper"
      style={{
        width: size,
        height: size
      }}
    >
      <div
        className="spinner"
        style={{
          width: size,
          height: size
        }}
      >
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="spinner-component-dot"
          style={{
            width: size,
            height: size
          }}
        />
      </div>
    </div>
  );
};

export default SpinnerFunction;
