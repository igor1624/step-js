declare namespace Utils {
    const debounce: (callback: any, delay: number) => (...args: any) => void;
    const throttle: (callback: any, delay: number) => (...args: any) => void;
    const wait: (duration: number, time0?: number) => Promise<unknown>;
    const setHTMLElementVisible: (htmlElement: HTMLElement, props: any) => void;
    const mountHTMLElement: (parentHTMLElement: HTMLElement, type: any, props?: any) => any;
    const textToHTML: (text: any) => any;
    class ParsedURL {
        href: string;
        protocol: string;
        username: string;
        password: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        pathnameElements: string[];
        search: string;
        hash: string;
        origin: string;
        searchParams: URLSearchParams;
        constructor(url: any);
    }
}
export default Utils;
