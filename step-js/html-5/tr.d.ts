import Widget from "../widget";
import VirtualElement from "../virtual-element";
import TD from "./td";
declare class TR extends Widget {
    constructor(...params: any);
    addTD(): TD;
    createDeviceElement(): VirtualElement | null;
}
export default TR;
