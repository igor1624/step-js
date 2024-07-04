import Widget from "./widget";
declare class Router extends Widget {
    static instance: Router;
    constructor(...params: any);
    static navigateTo(event: any, href: string): void;
    handleWindowLocationChange(): void;
    handleResizeEvent(event: any): void;
}
declare class RoutedLink extends Widget {
    constructor(href: string | undefined, ...params: any);
}
export { Router, RoutedLink };
