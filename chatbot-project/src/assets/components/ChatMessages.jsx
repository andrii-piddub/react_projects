import { useAutoScroll  } from './useAutoScroll'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'
function ChatMessages ({chatMessages}) {
  const chatMessagesRef = useAutoScroll(chatMessages)
    return (
      <div className="chat-messages-container"
      ref={chatMessagesRef}>
    {chatMessages.map((chatMessage)=>{ 
      return (
        <ChatMessage 
        message={chatMessage.message}
        sender={chatMessage.sender}
        getResponse={chatMessage.getResponse}
        key={chatMessage.id}
        />
      )
  })}
  </div>
  )}

  export default ChatMessages;