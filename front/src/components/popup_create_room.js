import React, { Component } from "react";
import Select from 'react-select';
import './popup_create_room.css'
export default class PopUpCreateRoom extends Component {
  
  state = {
    visible: false
  };
  
  data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    
    
  
  
  handleClick = () => {
   this.props.toggle();
  };
  
  makeVis = () => {
    this.setState({
          visible: !this.state.visible
        })
  };
  customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? '#ed6d0c'
        : base.borderColor,
      '&:hover': {
        borderColor: state.isFocused
          ? '#ed6d0c'
          : base.borderColor,
      }
    })
  };
  
  render() {
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title">Create room</p>
              <span className="close" onClick={this.handleClick}>&times;    </span>
            </div>
              <form className="create_room">
                {/* <input className="room-input" placeholder="Room name" name="room_name" required/>
                <input className="room-input" type="password" title="If empty, room will not require a password" placeholder="Room password" name="room_password"/> */}
                
                <div className="group-first">      
                    <input className="login-input-f" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="input-default-text"><b>Email</b></label>
                </div>
                <div className="group">      
                    <input className="login-input-f" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className='input-default-text'><b>Password</b></label>
                </div>
                {this.state.visible?
                <div className="select-div">
                  <Select
                  styles={this.customStyles}
                  options={this.data}
                  selectMultiple={true}
                  isMulti
                  touchUi={false}
                  />
                </div>
                : <div></div>}
                <div className="checkbox">
                  <div className="checkbox-wrapp">
                    <p className="checkbox-text">Do you want to compare more than one cryptocurrency?
                    </p>
                  </div>
                  <input onClick={this.makeVis} type="checkbox" name="One crypto type" value="True"/>
                </div>
                <button className="btn-sub" type="submit">Create</button>
              </form>
          </div>
      </div>
    );
   }
  }