declare class Router {
    static instance: Router;
    constructor();
    static parseURL(url: any): ParsedURL;
    handleWindowLocationChange(): void;
    navigateTo(event: any, href: string): void;
    handleResizeEvent(event: any): void;
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
export { Router, ParsedURL };
