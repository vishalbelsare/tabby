import { useServer } from 'tabby-chat-panel/react'

export default function Chat () {
  const server = useServer({
    init: (request) => {
      console.log('init', request)
    },
    sendMessage: (message) => {
      console.log('sendMessage', message)
    }
  })

  return (
    <div>
      Chat
    </div>
  )
}