import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import './rooms.css';
import Brak from './brak_zdj.jpg'
import PopUpCreateRoom from '../../components/popup_create_room';
import PopUpJoinRoom from '../../components/popup_join_room';
export default function Rooms(){
    const navigate = useNavigate()
    function goToRoom(e){
        navigate('/rooms/1')
    }
    const [visibleCreateRoom, setVisibleCreateRoom] = useState(false);
    const [visibleJoinRoom, setVisibleJoinRoom] = useState(false);
    function CreateRoomShow(e){
        setVisibleCreateRoom(!visibleCreateRoom);
    }
    function JoinRoomShow(e){
        setVisibleJoinRoom(!visibleJoinRoom);
    }
    return(
        <div className="main-box">
            <div>
                <div className="btn" >
                <button className="btn-style btn-left" onClick={CreateRoomShow}>Create room</button>
                <button className="btn-style btn-right" onClick={JoinRoomShow}>Join room</button>
                </div>
                {visibleCreateRoom ? <PopUpCreateRoom toggle={CreateRoomShow} /> : null}
                {visibleJoinRoom ? <PopUpJoinRoom toggle={JoinRoomShow} /> : null}
            </div>
            <div className="main-box main-box-rooms">
                <div className="single-room" onClick={goToRoom}>
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div>
                <div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div><div className="single-room">
                    <img className='room-image' src={Brak} />
                    <p className="room-name">Nazwa Pokoju</p>
                </div>
            </div>
        </div>)
}