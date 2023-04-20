import {useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react';
import AuthContext from "../../context/AuthContext"
import './rooms.css';
import Brak from './brak_zdj.jpg'
import PopUpCreateRoom from '../../components/popup_create_room';
import PopUpJoinRoom from '../../components/popup_join_room';
export default function Rooms(){
    let [groups,setGroups] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)
    useEffect(() => {
        getGroups()
    }, [])
    
    let getGroups = async () => {
        let response = await fetch("http://localhost:8000/api/group_members/", {
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            },})

        let data = await response.json()
        if(response.status === 200){
            setGroups(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    let showGroups = groups.map((item,index) => (
        <div key={index} className="single-room">
            <img className='room-image' src={Brak} />
            <p className="room-name">{item.name}</p>
        </div>
))


    const navigate = useNavigate()

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
                {showGroups}
                
            </div>
            
        </div>)
}