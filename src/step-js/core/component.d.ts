import VirtualElement from "./virtual-element";
import { Store } from "./store";
declare class Component {
    static $nextKey: number;
    readonly $key: string;
    props: any;
    state: any;
    observedPaths: ObservedPath[];
    disabled: boolean;
    refs: any;
    context: any;
    virtualElement?: VirtualElement;
    constructor(props?: any);
    static get$Key: () => number;
    callComponentWillMount(): void;
    componentWillMount(): void;
    getState(): any;
    cloneState(): any;
    setState(state: any): void;
    setDisabled(disabled: boolean): void;
    createVirtualElement(): VirtualElement | undefined;
    render(): any;
    callComponentDidMount(): void;
    mountObservedShelves(): void;
    componentDidMount(): void;
    getVirtualElement(): VirtualElement | undefined;
    getHTMLElement(): HTMLElement | null;
    onObservedStorePathChanged(path: string): void;
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
