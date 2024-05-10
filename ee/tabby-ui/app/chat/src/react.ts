import { createThreadFromInsideIframe, createThreadFromIframe } from "@quilted/threads"
import { RefObject, useMemo, useState, useEffect } from "react"
import { Api, createClient, createServer } from "./index"

function useClient(iframeRef: RefObject<HTMLIFrameElement>) {
  return useMemo(() => {
    if (iframeRef.current)
      return createThreadFromIframe(iframeRef.current)
  }, [iframeRef.current])
}

function useServer(api: Api) {
  const [isInIframe, setIsInIframe] = useState(false)

  useEffect(() => {
    setIsInIframe(window.self !== window.top)
  }, [])

  return useMemo(() => {
    if (isInIframe) {
      const thread = createThreadFromInsideIframe({
        expose: {
          init: api.init,
          sendMessage: api.sendMessage,
          test: api.test
        }
      })
      return thread
    }
  }, [isInIframe])
}

export {
  useClient,
  useServer,
}
