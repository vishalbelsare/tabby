import { MessageEndpoint, createEndpoint } from '@remote-ui/rpc'

export interface LineRange {
  start: number
  end: number
}

export interface FileContext {
  kind: 'file'
  range: LineRange
  filename: string
  link: string
}

export type Context = FileContext

export interface FetcherOptions {
  authorization: string
}

export interface ChatMessage {
  message?: string
  selectContext?: Context
  relevantContext?: Array<Context>
}

export interface InitRequest extends ChatMessage, FetcherOptions {}

export interface Api {
  init: (request: InitRequest) => void,
  sendMessage: (message: ChatMessage) => void
}

export function createClient(endpoint: MessageEndpoint) {
  return createEndpoint<Api>(endpoint)
}

export function createServer(endpoint: MessageEndpoint, api: Api) {
  const server = createEndpoint(endpoint)
  server.expose({
    init: api.init,
    sendMessage: api.sendMessage
  })
  return server;
}