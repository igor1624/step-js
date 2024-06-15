declare namespace Network {
    export const get$Key: () => number;
    export class Request {
        private $key;
        private readonly type;
        private url?;
        private body;
        private duration;
        onComplete?: Function;
        constructor(type: "get" | "post" | "put");
        setURL(url: string): void;
        setHeaders(): void;
        setBody(body: any): void;
        setDuration(duration: number): void;
        fire(jsonResponse?: boolean): "404: Bad Request" | undefined;
        wait(duration: number, time0?: number): Promise<unknown>;
    }
    export class Get extends Request {
        constructor();
    }
    export class Post extends Request {
        constructor();
    }
    export const createWebsocketConnection: (endpoint: string) => WebSocketConnection;
    class Connection {
        $key: number;
        endpoint: string;
        alive: boolean;
        constructor(endpoint: string);
    }
    class WebSocketConnection extends Connection {
        webSocket: WebSocket;
        constructor(endpoint: string);
        onWebSocketOpen(): void;
        onWebSocketClose(event: any): void;
        fireWebSocketEvent(action: string, payload: any): void;
    }
    export {};
}
export default Network;
