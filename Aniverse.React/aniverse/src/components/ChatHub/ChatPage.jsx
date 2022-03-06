import React from 'react'
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';

 function ChatPage({messages, sendMessage}) {
  return (
    <div className='chat-page'> 
        <MessageContainer messages={messages}/>
        <SendMessageForm sendMessage={sendMessage}/>
    </div>
  )
}
export default ChatPage;
