import Widget from "../widget";
import VirtualElement from "../virtual-element";
import TR from "./tr";
declare class TABLE extends Widget {
    constructor(...params: any);
    addTR(): TR;
    createDeviceElement(): VirtualElement;
}
export default TABLE;
