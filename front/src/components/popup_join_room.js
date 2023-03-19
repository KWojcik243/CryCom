import React, { useContext } from "react";
import AuthContext from "../context/AuthContext"
import './popup_create_room.css'

export default function PopUpJoinRoom (props) {
  let {authTokens} = useContext(AuthContext)
  let joinRoom = async(e) => {
    e.preventDefault()
    
    let response = await fetch('http://localhost:8000/api/join_group/', {
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify({'room_token':e.target.room_token.value,'password':e.target.password.value})
    })

    let data = await response.json()
    console.log(response)
    if (response.status === 201){

    }else{
        alert('Something went wrong!')
    }
  }

  let handleClick = () => {
   props.toggle();
  };
  
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Join room</b></p>
              <span className="close" onClick={handleClick}>&times;    </span>
            </div>
              <form onSubmit={joinRoom} className="create_room">
                <div className="group-first">      
                    <input className="register-input-f" type="text" name="room_token" required/>
                    <span className="highlight"></span>
                    <span className="bar bar-color"></span>
                    <label className="input-default-text"><b>Token</b></label>
                </div>
                <div className="group">      
                    <input className="register-input-f" type="password" name="password" required/>
                    <span className="highlight"></span>
                    <span className="bar bar-color"></span>
                    <label className='input-default-text'><b>Password</b></label>
                </div>
                <button className="btn-s btn-join" type="submit">Join</button>
              </form>
          </div>
      </div>
    );
  }