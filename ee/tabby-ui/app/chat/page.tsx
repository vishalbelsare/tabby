'use client'

import { useState, useRef } from 'react'
import { useServer } from './src/react'
import { type FetcherOptions } from './src'

import { ChatPanelHandler, MockChatPanel } from './components/mock-chat-panel'

export default function Chat () {
  const [isInit, setIsInit] = useState(false)
  const [fetcherOptions, setFetcherOptions] = useState<FetcherOptions | null>(null)
  const chatPanelRef = useRef<ChatPanelHandler>(null);

  useServer({
    init: async (request) => {
      setIsInit(true)
      setFetcherOptions(request.fetcherOptions)
      return 'init??'
    },
    sendMessage: (message) => {
      if (chatPanelRef.current) {
        chatPanelRef.current.addMessage(message);
      }
    }
  })

  if (!isInit || !fetcherOptions) return <></>
  // FIXME(wwayne): render chat component
  return (
    <MockChatPanel
      ref={chatPanelRef}
      fetcherOptions={fetcherOptions} />
  )
}
