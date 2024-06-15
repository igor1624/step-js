import Widget from "../widget";
import TR from "./tr";
declare class TBODY extends Widget {
    constructor(...params: any);
    addTR(): TR;
}
export default TBODY;
