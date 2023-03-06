import './specyfic_room.css'
import TableFriends from '../components/table-friends'
export default function SpecyficRoom(){
    return(
        <div className='crypto-room'>
            <TableFriends />
            <div className='chat-flex'>
                <p className="chat-name">Chat</p>
                <div className='chat'>
                    <div className="conversation">
                        hej
                    </div>
                    <div className="message-submit-box">
                        <textarea className="chat-text-message" placeholder="Your message"></textarea>
                        <button className='send-message'>Send</button>
                    </div>
                </div>
            </div>
        </div>
        )
}