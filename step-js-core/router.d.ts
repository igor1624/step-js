import Widget from "./widget";
declare class Router extends Widget {
    static instance: Router;
    constructor(...params: any);
    static parseURL(url: any): ParsedURL;
    static navigateTo(href: string, event: any): void;
    handleWindowLocationChange(): void;
    handleResizeEvent(event: any): void;
}
declare class RouterLink extends Widget {
    constructor(href: string, text: any, ...params: any);
}
declare class ParsedURL {
    href?: string;
    protocol?: string;
    username?: string;
    password?: string;
    host?: string;
    hostname?: string;
    port?: string;
    pathnames?: string[];
    search?: string;
    hash?: string;
    origin?: string;
    searchParams?: URLSearchParams;
}
export { Router, RouterLink, ParsedURL };
