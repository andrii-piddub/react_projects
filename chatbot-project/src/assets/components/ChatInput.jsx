import { useState } from 'react'
import { Chatbot} from 'supersimpledev';
import './ChatInput.css';
import LoadingSpinner from '../loading-spinner.gif';
export function ChatInput({chatMessages,setChatMessages}) {
        const[inputText, setInputText] = useState('');
        const [isLoading, setIsLoading] = useState(false)
        function saveInputText(event){
        setInputText(event.target.value)
        }

        async function sendMessage() {
          if (isLoading || inputText === '') {
            return;
          }
          setIsLoading(true);
          setInputText('');
          const newChatMessages = [
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id:crypto.randomUUID()

            }
          ]

          setChatMessages([
            ...newChatMessages,
            {
              message:<img className='loading' src={LoadingSpinner} /> ,
              sender:'robot',
              id:crypto.randomUUID()
            }
          ])

        const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID(),
              getResponse:true

            }
          ]);


          setIsLoading(false);
        }
        return (
        <div className="chat-input-container">
          <input 
            placeholder="Send message to chatbot" 
            size="30"
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
            onKeyDown={(event)=>{event.key === 'Enter' && sendMessage();
              event.key === 'Escape' && setInputText('')
            }
          }
            />
          <button
            onClick={sendMessage}
            className='send-button'
          >Send</button>
          <button
           onClick={()=>{localStorage.removeItem('messages');setChatMessages([])}}
           className={'clear-button'}>
            Clear
          </button>
        </div>
        );
      }
      