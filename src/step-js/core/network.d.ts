declare namespace Network {
    export const get$Key: () => number;
    export class Request {
        private $key;
        private readonly type;
        private url?;
        private headers?;
        private body;
        private duration;
        onComplete?: Function;
        constructor(type: "get" | "post" | "put");
        setURL(url: string): void;
        setHeader(key: string, value: string): void;
        setBody(body: any): void;
        setDuration(duration: number): void;
        fire(jsonResponse?: boolean): "404: Bad Request" | undefined;
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
