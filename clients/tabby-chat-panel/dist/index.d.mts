import * as _remote_ui_rpc from '@remote-ui/rpc';
import { MessageEndpoint } from '@remote-ui/rpc';

interface LineRange {
    start: number;
    end: number;
}
interface FileContext {
    kind: 'file';
    range: LineRange;
    filename: string;
    link: string;
}
type Context = FileContext;
interface FetcherOptions {
    authorization: string;
}
interface InitRequest {
    fetcherOptions: FetcherOptions;
    test: string;
}
interface Api {
    init: (request: InitRequest) => void;
    sendMessage: (message: ChatMessage) => void;
}
interface ChatMessage {
    message: string;
    selectContext?: Context;
    relevantContext?: Array<Context>;
}
declare function createClient(endpoint: MessageEndpoint): _remote_ui_rpc.Endpoint<Api>;
declare function createServer(endpoint: MessageEndpoint, api: Api): _remote_ui_rpc.Endpoint<unknown>;

export { type Api, type ChatMessage, type Context, type FetcherOptions, type FileContext, type InitRequest, type LineRange, createClient, createServer };
