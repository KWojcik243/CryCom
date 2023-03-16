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
      border: '2px solid #D1D1D1',
      fontFamily: 'Cabin',
      marginTop: '15px',
      borderColor: state.isFocused
        ? '#A411EA'
        : base.borderColor,
      '&:hover': {
        borderColor: state.isFocused
          ? '#A411EA'
          : base.borderColor,
      
      }
    })
  };
  
  render() {
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Create room</b></p>
              <span className="close" onClick={this.handleClick}>&times;    </span>
            </div>
              <form className="create_room">
                <div className="group-first">      
                    <input className="login-input-f" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar-cr"></span>
                    <label className="input-default-text"><b>Room name</b></label>
                </div>
                <div className="group">      
                    <input className="login-input-f" type="password" required/>
                    <span className="highlight"></span>
                    <span className="bar-cr"></span>
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
                  <p className="checkbox-text">Do you want to compare more than one cryptocurrency?</p>
                  <input onClick={this.makeVis} className="checkbox-input" type="checkbox" name="One crypto type" value="True"/>
                </div>
                <button className="btn-s btn-create" type="submit">Create</button>
              </form>
          </div>
      </div>
    );
   }
  }