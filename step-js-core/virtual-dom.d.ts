import VirtualElement from "./virtual-element";
import Component from "./component";
declare class VirtualDOM {
    static rootHTMLElement: HTMLElement | null;
    static rootVirtualElement: VirtualElement | null;
    static modalHTMLElement: HTMLElement | null;
    static modalVirtualElement: VirtualElement | null;
    static popupHTMLElement: HTMLElement | null;
    static popupVirtualElement: VirtualElement | null;
    static dirtyVirtualElementsNumber: number;
    static mount(object: any, htmlElement?: any): void;
    static showModal(object: any): void;
    static showPopup(object: any): void;
    static hydrateVirtualElement(virtualElement: VirtualElement): void;
    static setRef(virtualElement: VirtualElement | undefined): void;
    static passComponentDidMount(virtualElement: VirtualElement): void;
    static forceUpdate(component: Component): void;
    static updateVirtualElement(virtualElement: VirtualElement | null): void;
    static findDirties(virtualElement: VirtualElement | null): {
        dirtyParentVirtualElement: VirtualElement | null;
        dirtyComponent: Component | null;
    };
    static passComponentWillUnmount(virtualElement: VirtualElement | null): void;
    static hideModal(): void;
    static hidePopup(): void;
    static createRef(): Ref;
}
declare class Ref {
    static $nextKey: number;
    readonly $key: number;
    current: any;
    constructor();
    static get$Key: () => number;
}
export default VirtualDOM;
