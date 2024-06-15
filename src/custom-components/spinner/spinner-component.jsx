import React from "../../react";
import "./spinner-component.css";

const SpinnerComponent = ({
  size
}) => {
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

export default SpinnerComponent;
