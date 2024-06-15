import Widget from "../widget";
import TBODY from "./tbody";
declare class TABLE extends Widget {
    constructor(...params: any);
    addTBODY(): TBODY;
}
export default TABLE;
