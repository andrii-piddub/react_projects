import RobotProfileImage from '../robot.png';
import UserProfileImage from '../profile-1.jpg';
import './ChatMessage.css';
import dayjs from 'dayjs'


export function ChatMessage({message,sender, getResponse}) {
        const time =dayjs().valueOf()
        return (
          <div className={
            sender === 'user' 
            ? 'chat-message-user'
            :'chat-message-robot'
          }>
            {sender === 'robot' && 
              (<img src={RobotProfileImage} className="chat-message-profile"/>)}
              <div className="chat-message-text">
            {message}
            <div className={'time-container'}>
              {(sender==='user' || (sender === 'robot' && getResponse === true)) && dayjs(time).format('h:mma')}
            </div>
              </div>
            {sender === 'user' && 
           
              (<img src={UserProfileImage} className="chat-message-profile"/>)}
          </div>
        );

      }