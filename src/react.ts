import {Device, Component, VirtualDOM} from "step-js-core";

const React = {
  createElement: Device.createVirtualElement,
  Component: Component,
  createRef: () => VirtualDOM.createRef()
};

export default React;
