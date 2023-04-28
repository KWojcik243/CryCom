import './specific_room.css'
import TableFriends from '../../components/table-friends'
import PopUpAddValues from '../../components/popup_add_values';
import {useState, useEffect, useContext} from 'react';
import no_photo from '../../assets/no_photo.jpg'
import AuthContext from "../../context/AuthContext"
import { useParams } from 'react-router-dom';
import {IoMdSend} from 'react-icons/io';
const data = [
    { name: "Anom", message: "Hi Maj ", date: "09.03.2023 16:59"},
    { name: "Maj", message: "Hi Anom", date: "09.03.2023 17:00"},
    { name: "Anom", message: "Whats upsssssssssssssssss", date: "09.03.2023 17:00"},
    { name: "Maj", message: "You have big profit :D", date: "09.03.2023 17:00"},
  ]

export default function SpecificRoom(){
    let { roomId } = useParams();
    const [visibleAddValues, setVisibleAddValues] = useState(false);
    let {authTokens, logoutUser} = useContext(AuthContext)
    useEffect(() => {
        getGroupInfo()
        
    }, [])

    let [group,setGroup] = useState([])
    let getGroupInfo = async () => {
        let response = await fetch(`http://localhost:8000/api/group_info/?room-id=${roomId}`, {
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            },})

        let data = await response.json()
        console.log(data)
        if(response.status === 200){
            setGroup(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    function AddValuesShow(e){
        setVisibleAddValues(!visibleAddValues);
    }

    return(
        <div className='main-room-box'>
            <div className='room-menu'>
                <img className='room-image-mini' alt='room' src={no_photo} />
                    <div className='control-bar-wrapper'>
                        <div className='control-bar-action'>{group.room_name}</div>
                        <div className='control-bar-action' onClick={() => {navigator.clipboard.writeText(group.room_token)}}>Copy access token</div>
                        <div className='control-bar-action' onClick={AddValuesShow}>Add</div>
                    </div>
                    {visibleAddValues ? <PopUpAddValues toggle={AddValuesShow} /> : null}
                
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