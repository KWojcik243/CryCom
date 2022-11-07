import React, { Component } from "react";
import './popup_create_room.css'
export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
  render() {
    return (
      <div className="dark-background">
         <div className="box">
              <span className="close" onClick={this.handleClick}>&times;    </span>
              <form className="create_room">
                <p>Create room</p>
                <input className="" placeholder="Room name" name="room_name" required/>
                <input className="" title="If empty, room will not require a password" placeholder="Room password" name="room_name"/>
                <div className="checkbox">
                  <p>Do you want to compare more then one cryptocurrency?
                  </p>
                  <input type="checkbox" name="One crypto type" value="True"/>
                </div>
                <button type="submit">Create</button>
              </form>
          </div>
      </div>
    );
   }
  }