import './specific_room.css'
import TableFriends from '../../components/table-friends'
import {IoMdSend} from 'react-icons/io';
const data = [
    { name: "Anom", message: "Hi Maj ", date: "09.03.2023 16:59"},
    { name: "Maj", message: "Hi Anom", date: "09.03.2023 17:00"},
    { name: "Anom", message: "Whats upsssssssssssssssss", date: "09.03.2023 17:00"},
    { name: "Maj", message: "You have big profit :D", date: "09.03.2023 17:00"},
  ]

export default function SpecificRoom(){
    return(
        <div className='main'>
            <div className=''>

            </div>
            <div className='crypto-room'>
                <TableFriends />
                <div className='chat-flex'>
                    <p className="chat-name">Room chat</p>
                    <div className='chat'>
                        <div className="conversation">
                        {data.map((val, key) => {
                            return (
                                
                            <div className="messeges" key={key}>
                                {val.name==="Anom" ?
                                 <div className='different-user-mess'>
                                    <div className='mess'>
                                        <div className='info'>
                                                <p>{val.name} {val.date}</p>
                                            </div>
                                        <div className='diff-mess-box'>
                                            <p style={{display: 'inline-block'}}>{val.message}</p>
                                        </div>
                                    </div>
                                 </div>
                                 : 
                                 <div className='our-mess'>
                                    <div className='mess'>
                                        <div className='info' style={{alignSelf:'flex-end'}}>
                                            <p>{val.date}</p>
                                        </div>
                                        <div className='our-mess-box'>
                                            <p>{val.message}</p>
                                        </div>
                                    </div>
                                 </div>}
                            </div>
                            )
                        })}
                        </div>
                        <div className="message-submit-box">
                            <div className='chat-text-message' contentEditable="true">
                                <p className='text-area' data-placeholder="Aaa"></p>
                            </div>
                            <IoMdSend style={{fontSize: '30px', alignSelf: 'flex-end', marginBottom:'3px', color: '#FE2517'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
}