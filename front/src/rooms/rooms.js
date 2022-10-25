import {useNavigate} from 'react-router-dom'
import './rooms.css';
import Brak from './brak_zdj.jpg'
export default function Rooms(){
    const navigate = useNavigate()
    function goToRoom(e){
        navigate('/rooms/1')
    }
    return(
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
        </div>)
}