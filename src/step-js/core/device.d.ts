import VirtualElement from "./virtual-element";
declare class Device {
    static createVirtualElement(object: any, props?: any, ...children: any): any;
    static mountVirtualElement(virtualElement: VirtualElement, parentHTMLElement?: HTMLElement, targetHTMLElement?: HTMLElement): void;
    static createHTMLString(virtualElement: VirtualElement): any;
    static createStyleString(styleProps: any): string;
}
export default Device;
