import {useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react';
import logo from '../assets/android-chrome-192x192.png'
import user_img from '../authorized/main_page/user.jpg'
import AuthContext from "../context/AuthContext"
import {BiChevronRight} from 'react-icons/bi';
import './nav.css';
export default function Nav(){
    let {user, logoutUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [visible, setVisible] = useState(true);
    function SettingsShow(e){
        setVisible(!visible);
    }
    return (
        <div>
             <div className="navbar">
                <img className="logo"src={logo} alt='logo'></img>
                <div className='button-box'>
                    <button className="nav-button" onClick={()=>{
                        navigate('/home')
                    }}>Home</button>
                    <button className="nav-button" onClick={()=>{
                        navigate('/home')
                    }}>Blog</button>
                    <button className="nav-button" onClick={()=>{
                        navigate('/home')
                    }}>Analitics</button>
                    <button className="nav-button" onClick={()=>{
                        navigate('/rooms')
                    }}>Rooms</button>
                    <button className="nav-button" onClick={()=>{
                        navigate('/rooms')
                    }}>About</button>
                </div>
                
                <div className='profil'>
                    <img className="user"src={user_img} alt='menu-logo' onClick={SettingsShow}></img>
                    <div className="options-box" id="op-box" style={visible ? null : { display: "block" }}>
                        <p className="one-option">Nickname</p>
                        {/* {user.username}  */}
                        <div className='divider-prof'></div>
                        <div className="p-wrapp"> <p className="one-option">Settings</p> <BiChevronRight style={{fontSize: '30px', alignSelf: 'flex-end', marginBottom:'4px', color: '#D1D1D1'}}/></div>
                        <div className="p-wrapp"> <p className="one-option">Contact</p> <BiChevronRight style={{fontSize: '30px', alignSelf: 'flex-end', marginBottom:'4px', color: '#D1D1D1'}}/></div>
                        <div className="p-wrapp"> <p className="one-option">Privacy</p> <BiChevronRight style={{fontSize: '30px', alignSelf: 'flex-end', marginBottom:'4px', color: '#D1D1D1'}}/></div>
                        <div className="p-wrapp" onClick={logoutUser}> <p className="one-option">Log out</p><BiChevronRight style={{fontSize: '30px', alignSelf: 'flex-end', marginBottom:'4px', color: '#D1D1D1'}}/> </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}