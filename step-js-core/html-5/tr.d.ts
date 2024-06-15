import Widget from "../widget";
import TD from "./td";
declare class TR extends Widget {
    constructor(...params: any);
    addTD(): TD;
}
export default TR;
