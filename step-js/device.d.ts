import VirtualElement from "./virtual-element";
declare class Device {
    static debounce(callback: any, delay: number): (...args: any) => void;
    static throttle(callback: any, delay: number): (...args: any) => void;
    static mountHTMLElement(parentHTMLElement: HTMLElement, type: any, props?: any): any;
    static createVirtualElement(object: any, props?: any, ...children: any): any;
    static mountVirtualElement(virtualElement: VirtualElement, parentHTMLElement?: HTMLElement, targetHTMLElement?: HTMLElement): void;
    static createHTMLString(virtualElement: VirtualElement): any;
    static createStyleString(styleProps: any): string;
}
export default Device;
