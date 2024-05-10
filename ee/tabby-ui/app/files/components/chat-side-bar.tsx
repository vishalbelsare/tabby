import React, { useEffect } from 'react'

import { useStore } from '@/lib/hooks/use-store'
import { useChatStore } from '@/lib/stores/chat-store'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { IconClose } from '@/components/ui/icons'

import { QuickActionEventPayload } from '../lib/event-emitter'
import { SourceCodeBrowserContext } from './source-code-browser'

// FIXME(wwayne): using tabby-chat-panel package
import { useClient } from '../../chat/src/react'

interface ChatSideBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

export const ChatSideBar: React.FC<ChatSideBarProps> = ({
  className,
  ...props
}) => {
  const { pendingEvent, setPendingEvent } = React.useContext(
    SourceCodeBrowserContext
  )
  const activeChatId = useStore(useChatStore, state => state.activeChatId)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const client = useClient(iframeRef)

  const getPrompt = ({
    action,
    code,
    language,
    path,
    lineFrom,
    lineTo
  }: QuickActionEventPayload) => {
    let builtInPrompt = ''
    switch (action) {
      case 'explain':
        builtInPrompt = 'Explain the following code:'
        break
      case 'generate_unittest':
        builtInPrompt = 'Generate a unit test for the following code:'
        break
      case 'generate_doc':
        builtInPrompt = 'Generate documentation for the following code:'
        break
      default:
        break
    }
    const codeBlockMeta = `${
      language ?? ''
    } is_reference=1 path=${path} line_from=${lineFrom} line_to=${lineTo}`
    return `${builtInPrompt}\n${'```'}${codeBlockMeta}\n${code}\n${'```'}\n`
  }

  // React.useEffect(() => {
  //   const contentWindow = iframeRef.current?.contentWindow

  //   if (pendingEvent) {
  //     contentWindow?.postMessage({
  //       action: 'append',
  //       payload: getPrompt(pendingEvent)
  //     })
  //     setPendingEvent(undefined)
  //   }
  // }, [pendingEvent, iframeRef.current?.contentWindow])

  useEffect(() => {
    setTimeout(() => {
      initCall()
    }, 3000)
  }, [client])

  const initCall = () => {
    client?.call.init({
      fetcherOptions: {
        authorization: 'test'
      }
    }).then(res => console.log(res))

    // setTimeout(() => {
    //   client?.call.sendMessage({
    //     message: 'Message 1'
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   client?.call.sendMessage({
    //     message: 'Message 2'
    //   })
    // }, 3000)
  }

  

  return (
    <div className={cn('flex h-full flex-col', className)} {...props}>
      <Header />
      <iframe
        src={`/chat`}
        className="w-full flex-1 border-0"
        key={activeChatId}
        ref={iframeRef}
      />
    </div>
  )
}

function Header() {
  const { setChatSideBarVisible } = React.useContext(SourceCodeBrowserContext)

  return (
    <div className="sticky top-0 flex items-center justify-end px-2 py-1">
      <Button
        size="icon"
        variant="ghost"
        onClick={e => setChatSideBarVisible(false)}
      >
        <IconClose />
      </Button>
    </div>
  )
}
