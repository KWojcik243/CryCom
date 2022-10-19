import {useNavigate} from 'react-router-dom'
import logo from '../main_page/btc-logo.png'
import user from '../main_page/user.jpg'
import '../main_page/nav.css';
export default function Nav(){
    let settins_status=true;
    const navigate = useNavigate()
    function settingsShow(e){
        console.log(settins_status);
        settins_status = !settins_status
        {settins_status ? document.getElementById("op-box").style.display = "none" :
                          document.getElementById("op-box").style.display = "block"};
    }
    return (
        <div>
             <div className="navbar">
                <img className="logo"src={logo} alt='logo'></img>
                <button className="nav-button" onClick={()=>{
                    navigate('/login')
                }}>HOME</button>
                <button className="nav-button">ROOMS</button>
                <button className="nav-button">BLOG</button>
                <img className="user"src={user} alt='menu-logo' onClick={settingsShow}></img>
            </div>
            <div className="options-box" id="op-box">
                <p>Settings</p>
                <p>Log out</p>
            </div>
        </div>
    )
}