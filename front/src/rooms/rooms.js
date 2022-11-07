import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import './rooms.css';
import PopUp from "./../components/popup_create_room";
import Brak from './brak_zdj.jpg'
export default function Rooms(){
    const navigate = useNavigate()
    function goToRoom(e){
        navigate('/rooms/1')
    }
    const [visible, setVisible] = useState(false);
    function SettingsShow(e){
        setVisible(!visible);
    }
    return(
        <div className="main-box">
            <div>
                <div className="btn" onClick={SettingsShow}>
                <button>Create room</button>
                <button>Join room</button>
                </div>
                {visible ? <PopUp toggle={SettingsShow} /> : null}
            </div>
            <div className="main-box">
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