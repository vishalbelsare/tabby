import { vscode } from "./utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Message,
  OpenAIStream,
  OpenAIStreamCallbacks,
  StreamingTextResponse
} from 'ai'
import { useChat } from 'ai/react'

declare global {
  interface Window {
    _originFetch?: Window['fetch'] | undefined
  }
}

function App() {
  const [token, setToken] = useState("")
  const [apiHost, setApiHost] = useState("")

  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }

  const { messages, append } = useChat();

  useEffect(() => {
    window.addEventListener('message', event => {
      const { data } = event
      console.log('webview listener data: ', data)
      testChatHandler(data.token, data.text, data.apiEndpoint)
    })
  })

  const testChatHandler = async (token: string, text: string, apiEndpoint: string) => {
    setToken(token)
    setApiHost(apiEndpoint)

    console.log(token, apiEndpoint)

    await append({
      id: new Date().toTimeString(),
      content: `explain this: ${text}`,
      role: 'user'
    })
  }

  useEffect(() => {
    if (!window._originFetch) {
      window._originFetch = window.fetch
    }

    const fetch = window._originFetch

    window.fetch = async function (url, requestInit) {
      if (url !== '/api/chat') {
        return fetch(url, requestInit)
      }
      console.log('requestInit?.body', requestInit?.body)
      console.log('apiHost>>>>>', apiHost, "token", token)
      console.log('body', mergeMessagesByRole(requestInit?.body))
      try {
        const response = await fetch(`http://localhost:8080/v1/chat/completions`, {
          body: mergeMessagesByRole(requestInit?.body),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer auth_fde7159a4c2a4b5dbd67d04df11ff47a`,
            'Accept': 'text/event-stream'
          }
        })
        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
      } catch (err) {
        console.log('request errror', err)
        throw err
      }
    }

    return () => {
      if (window?._originFetch) {
        window.fetch = window._originFetch
        window._originFetch = undefined
      }
    }
  }, [])

  function mergeMessagesByRole(body: BodyInit | null | undefined) {
    if (typeof body !== 'string') return body
    try {
      const bodyObject = JSON.parse(body)
      let messages: Message[] = bodyObject.messages?.slice()
      if (Array.isArray(messages) && messages.length > 1) {
        let previewCursor = 0
        let curCursor = 1
        while (curCursor < messages.length) {
          let prevMessage = messages[previewCursor]
          let curMessage = messages[curCursor]
          if (curMessage.role === prevMessage.role) {
            messages = [
              ...messages.slice(0, previewCursor),
              {
                ...prevMessage,
                content: [prevMessage.content, curMessage.content].join('\n')
              },
              ...messages.slice(curCursor + 1)
            ]
          } else {
            previewCursor = curCursor++
          }
        }
        return JSON.stringify({
          ...bodyObject,
          messages
        })
      } else {
        return body
      }
    } catch (e) {
      return body
    }
  }

  // console.log("messages>>", messages)
  return (
    <main>
      <h1>Chat testing</h1>
      <VSCodeButton onClick={handleHowdyClick}>Howdy!</VSCodeButton>

      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap" style={{ paddingTop: '10px' }}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
    </main>
  );
}

export default App;
