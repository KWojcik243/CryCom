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
              <p className="title">Join room</p>
              <span className="close" onClick={this.handleClick}>&times;    </span>
            </div>
              <form className="create_room">
                <input className="room-input" placeholder="Room token" name="room_token" required/>
                <input className="room-input" type="password" title="If empty, room will not require a password" placeholder="Room password" name="room_password"/>
                <button className="btn-sub" type="submit">Join</button>
              </form>
          </div>
      </div>
    );
   }
  }