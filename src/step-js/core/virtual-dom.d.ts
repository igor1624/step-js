import VirtualElement from "./virtual-element";
import Component from "./component";
declare class VirtualDOM {
    static virtualElements: VirtualElement[];
    static dirtyVirtualElementsNumber: number;
    static mount(object: any, parentHTMLElement?: any): void;
    static unmount(component: Component): void;
    static hydrateVirtualElement(virtualElement: VirtualElement): void;
    static setRef(virtualElement: VirtualElement | undefined): void;
    static passComponentDidMount(virtualElement: VirtualElement): void;
    static dirtyComponent(component: Component): void;
    static updateDirtyVirtualElements(): void;
    static findDirties(virtualElement: VirtualElement | null): {
        dirtyParentVirtualElement: VirtualElement | null;
        dirtyComponent: Component | null;
    };
    static updateDirtyComponent(dirtyParentVirtualElement: VirtualElement | null, dirtyComponent: Component): void;
    static passComponentWillUnmount(virtualElement?: VirtualElement): void;
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
