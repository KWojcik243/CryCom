// import ReactDOM from "react-dom"
// import Nav from "../components/nav.js"
import {useNavigate} from 'react-router-dom'
import logo from './btc-logo.png'
import user from './user.jpg'
import './home.css';
export default function Page(){
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
                <img className="logo"src={logo}></img>
                <button className="nav-button" onClick={()=>{
                    navigate('/login')
                }}>HOME</button>
                <button className="nav-button">ROOMS</button>
                <button className="nav-button">BLOG</button>
                <img className="user"src={user} onClick={settingsShow}></img>
            </div>
            <div className="options-box" id="op-box">
                <p>Settings</p>
                <p>Log out</p>
            </div>
        </div>
    )
}
