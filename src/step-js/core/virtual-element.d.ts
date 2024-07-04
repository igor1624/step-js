declare class VirtualElement {
    type: any;
    props: any;
    createdBy: any;
    children: VirtualElement[] | undefined;
    static $nextKey: number;
    $key: string;
    $parentVirtualElement?: VirtualElement;
    $parentHTMLElement?: HTMLElement;
    $dummyParentHTMLElement?: HTMLElement;
    isDirty: boolean;
    constructor(type: any, props?: any);
    getChildren(): VirtualElement[];
    add(child: VirtualElement): void;
    create$Key(): void;
    static get$Key(): number;
    getHTMLElement(): HTMLElement | null;
}
export default VirtualElement;
