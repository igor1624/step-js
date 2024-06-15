import VirtualElement from "./virtual-element";
import { Store } from "./store";
declare class Component {
    static $nextKey: number;
    readonly $key: string;
    props: any;
    state: any;
    observedPaths: ObservedPath[];
    disabled: boolean;
    context: any;
    refs: any;
    virtualElement: VirtualElement | null;
    constructor(props?: any);
    static get$Key: () => number;
    callComponentWillMount(): void;
    componentWillMount(): void;
    getState(): any;
    cloneState(): any;
    setState(state: any): void;
    setDisabled(disabled: boolean): void;
    createVirtualElement(): VirtualElement | null;
    render(): any;
    callComponentDidMount(): void;
    mountObservedShelves(): void;
    componentDidMount(): void;
    getVirtualElement(): VirtualElement | null;
    getHTMLElement(): HTMLElement | null;
    forceUpdate(): void;
    callComponentWillUnmount(): void;
    unmountObservedShelves(): void;
    componentWillUnmount(): void;
    onResize?: Function;
}
declare class ObservedPath {
    store: Store;
    path: string;
    constructor(store: Store, path: string);
}
export default Component;
