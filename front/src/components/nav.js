import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import logo from '../main_page/btc-logo.png'
import user from '../main_page/user.jpg'
import './nav.css';
export default function Nav(){
    const navigate = useNavigate()
    const [visible, setVisible] = useState(true);
    function SettingsShow(e){
        setVisible(!visible);
    }
    return (
        <div>
             <div className="navbar">
                <img className="logo"src={logo} alt='logo'></img>
                <button className="nav-button" onClick={()=>{
                    navigate('/')
                }}>HOME</button>
                <button className="nav-button" onClick={()=>{
                    navigate('/rooms')
                }}>ROOMS</button>
                <button className="nav-button">BLOG</button>
                <img className="user"src={user} alt='menu-logo' onClick={SettingsShow}></img>
            </div>
            <div className="options-box" id="op-box" style={visible ? null : { display: "block" }}>
                <div className="p-wrapp"> <p className="one-option">Settings</p> </div>
                <div className="p-wrapp"> <p className="one-option">Contact</p> </div>
                <div className="p-wrapp"> <p className="one-option">Privacy</p> </div>
                <div className="p-wrapp"> <p className="one-option">Log out</p> </div>
            </div>
        </div>
    )
}