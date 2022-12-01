import './specyfic_room.css'
export default function SpecyficRoom(){
    return(
        <div className='crypto-room'>
            <div className='table-of-crypto'>
            </div>
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