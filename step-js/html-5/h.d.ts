import Widget from "../widget";
declare class H extends Widget {
    constructor(type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", innerText?: string, ...params: any);
}
declare class H1 extends H {
    constructor(innerText?: string, ...params: any);
}
declare class H2 extends H {
    constructor(innerText?: string, ...params: any);
}
declare class H3 extends H {
    constructor(innerText?: string, ...params: any);
}
declare class H4 extends H {
    constructor(innerText?: string, ...params: any);
}
declare class H5 extends H {
    constructor(innerText?: string, ...params: any);
}
declare class H6 extends H {
    constructor(innerText?: string, ...params: any);
}
export { H1, H2, H3, H4, H5, H6 };
