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
              <span className="close" onClick={this.handleClick}>&times;    </span>
              <form className="create_room">
                <p>Join room</p>
                <input className="" placeholder="Room token" name="room_name" required/>
                <input className="" title="Leave empty, if room not require a password" placeholder="Room password" name="room_name"/>
                <button type="submit">Join</button>
              </form>
          </div>
      </div>
    );
   }
  }