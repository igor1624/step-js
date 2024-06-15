import Widget from "../widget";
declare class INPUT extends Widget {
    constructor(type: "text" | "password" | "checkbox", ...params: any);
    getValue(): any;
    setValue(value: string): void;
}
export default INPUT;
