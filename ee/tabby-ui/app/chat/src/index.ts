import { MessageEndpoint, createEndpoint } from '@remote-ui/rpc'
import { createThread } from "@quilted/threads"

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
  authorization: string,
}

export interface InitRequest {
  fetcherOptions: FetcherOptions
}

export interface Api {
  init: (request: InitRequest) => void,
  sendMessage: (message: ChatMessage) => void,
  test: () => string
}

export interface ChatMessage {
  message: string
  selectContext?: Context
  relevantContext?: Array<Context>
}

export function createClient(fn: () => typeof createThread) {
  // return createEndpoint<Api>(endpoint)
}

export function createServer(endpoint: MessageEndpoint, api: Api) {
  const server = createEndpoint(endpoint)
  server.expose({
    init: api.init,
    sendMessage: api.sendMessage,
    test: api.test
  })
  return server;
}