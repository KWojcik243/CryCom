import {useNavigate} from 'react-router-dom'
import logo from '../main_page/btc-logo.png'
import user from '../main_page/user.jpg'
import './nav.css';
export default function Nav(){
    let settins_status=true;
    const navigate = useNavigate()
    function settingsShow(e){
        settins_status = !settins_status
        {settins_status ? document.getElementById("op-box").style.display = "none" :
                          document.getElementById("op-box").style.display = "block"};
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
                <img className="user"src={user} alt='menu-logo' onClick={settingsShow}></img>
            </div>
            <div className="options-box" id="op-box">
                <div className="p-wrapp"> <p className="one-option">Settings</p> </div>
                <div className="p-wrapp"> <p className="one-option">Contact</p> </div>
                <div className="p-wrapp"> <p className="one-option">Privacy</p> </div>
                <div className="p-wrapp"> <p className="one-option">Log out</p> </div>
            </div>
        </div>
    )
}