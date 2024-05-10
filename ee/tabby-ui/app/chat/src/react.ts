import { fromIframe, fromInsideIframe } from "@remote-ui/rpc"
import { RefObject, useMemo, useState, useEffect } from "react"
import { Api, createClient, createServer } from "./index"

function useClient(iframeRef: RefObject<HTMLIFrameElement>) {
  return useMemo(() => {
    if (iframeRef.current)
      return createClient(fromIframe(iframeRef.current))
  }, [iframeRef.current])
}

function useServer(api: Api) {
  const [isInIframe, setIsInIframe] = useState(false)

  useEffect(() => {
    setIsInIframe(window.self !== window.top)
  }, [])

  return useMemo(() => {
    if (isInIframe)
      return createServer(fromInsideIframe(), api)
  }, [isInIframe])
}

export {
  useClient,
  useServer,
}
