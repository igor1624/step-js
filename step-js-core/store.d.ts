import Component from "./component";
declare class Store {
    protected state: any;
    storeObserverDescriptors: StoreObserverDescriptor[];
    constructor();
    startObservingPath(component: Component, path: string): Component | null;
    stopObservingPath(component: Component, path: string): void;
    removeObserver(component: Component): void;
    getState(): any;
    cloneState(): any;
    setState(state: any, affectedPaths?: string[]): void;
    forceUpdate(): void;
}
declare class StoreObserverDescriptor {
    component: Component | null;
    path: string;
    needsUpdate: boolean;
    constructor(component: Component, path: string);
}
declare const stores: Store[];
export { Store, StoreObserverDescriptor, stores };
