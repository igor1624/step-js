import VirtualElement from "./virtual-element";
import Component from "./component";
declare class VirtualDOM {
    static renderedVirtualElement: VirtualElement | null;
    static mountedHTMLElement: HTMLElement | null;
    static renderedModalVirtualElement: VirtualElement | null;
    static mountedModalHTMLElement: HTMLElement | null;
    static dirtyVirtualElementsNumber: number;
    static mount(object: any, htmlElement?: any): void;
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
