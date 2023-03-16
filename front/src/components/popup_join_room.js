import React, { Component } from "react";
import './popup_create_room.css'
export default class PopUpJoinRoom extends Component {
  handleClick = () => {
   this.props.toggle();
  };
  render() {
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Join room</b></p>
              <span className="close" onClick={this.handleClick}>&times;    </span>
            </div>
              <form className="create_room">
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
  }