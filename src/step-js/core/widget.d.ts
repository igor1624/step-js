import Component from "./component";
import VirtualElement from "./virtual-element";
declare class Widget extends Component {
    readonly type: string;
    classNames: string[];
    innerHTML: string | undefined;
    children: any[] | undefined;
    constructor(type: string, ...params: any);
    getClassName(): string;
    hasClassName(className: string): boolean;
    addClassNames(className: string): this;
    removeClassName(className: string): this;
    toggleClassName(className: string): this;
    resetClassName(): this;
    setProp(name: string, value: string): this;
    getStyle(): any;
    setStyle(style: Object): this;
    getStyleRule(name: string): any;
    setStyleRule(name: string, value: string): this;
    setInnerText(innerText: string): this;
    setInnerHTML(innerHTML: string): this;
    getChildren(): any[];
    add(child: any): any;
    removeAll(): void;
    createVirtualElement(): VirtualElement;
    addVirtualElements(parentVirtualElement: VirtualElement): void;
    addVirtualElement(parentVirtualElement: VirtualElement, child: any): void;
}
export default Widget;
