import React, { useState, useEffect } from 'react'
import { getMessages, postMessage, deleteMessage } from 'Utilities/services/messages'

import MessageForm from 'Components/MessageView/MessageForm'
import MessageList from 'Components/MessageView/MessageList'

const MessageView = () => {
  const [messages, setMessages] = useState([])

  const handleGetMessages = async () => {
    const newMessages = await getMessages()
    setMessages(newMessages)
  }

  useEffect(() => {
    handleGetMessages()
  }, [])

  const handlePostMessage = async (newMessage) => {
    await postMessage(newMessage)
    handleGetMessages()
  }

  const handleDeleteMessage = async (message) => {
    await deleteMessage(message)
    handleGetMessages()
  }

  return (
    <>
      <h1>Messages</h1>
      <p>Remember to be human. Don&apos;t knowingly hurt others.</p>
      <MessageForm postMessage={handlePostMessage} />
      <MessageList messages={messages} deleteMessage={handleDeleteMessage} />
    </>
  )
}
export default MessageView
