import { useState, useEffect} from 'react'
import {Chatbot} from 'supersimpledev'
import {ChatInput} from './assets/components/ChatInput' 
import ChatMessages  from './assets/components/ChatMessages';
import './App.css'

    



      function App () {
            const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))||[]);
            useEffect(()=>{
                  localStorage.setItem('messages',JSON.stringify(chatMessages));},[chatMessages])
            
            useEffect(()=>{
                  Chatbot.addResponses({
                        'What is your job?':'I provide required information'
                  })
            },[])


        return (
         <div className={"app-container"}>
          {chatMessages.length === 0 &&  <p className={'welcoming'}>Welcome  to the chatbot project! Send a message using the textbox below</p>}
          <ChatMessages 
          chatMessages={chatMessages}
          />
      <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          />
        </div>
        );
      }

export default App
