import Utils from "./utils";
import Device from "./device";
import VirtualElement from "./virtual-element";
import VirtualDOM from "./virtual-dom";
import Component from "./component";
import Widget from "./widget";
import { Router, RoutedLink } from "./router";
import { Store, StoreObserverDescriptor, stores } from "./store";
import Network from "./network";
import StyleRuleAnimations from "./style-rule-animations";
declare const React: {
    createElement: typeof Device.createVirtualElement;
    Component: typeof Component;
    createRef: () => {
        readonly $key: number;
        current: any;
    };
};
export { Utils, Device, VirtualElement, VirtualDOM, Component, Widget, Router, RoutedLink, Store, StoreObserverDescriptor, stores, Network, StyleRuleAnimations, React };
