import React, { Component } from "react";
import Select from 'react-select';
import './popup_create_room.css'
export default class PopUpCreateRoom extends Component {
  
  
  data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedOptions: [],
    };
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
  }
    
  createRoom = async(e) => {
    
    e.preventDefault()
    const { selectedOptions } = this.state;
    let selected = selectedOptions.map(o => o.value).join(",")
    console.log(selected)
    let response = await fetch('http://localhost:8000/api/create_group/', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({'name':e.target.room_name.value,'password':e.target.password.value, "crypto_type": selected})
    })

    let data = await response.json()
    console.log(response)
    if (response.status === 201){

    }else{
        alert('Something went wrong!')
    }
  }
  
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
    const { selectedOptions } = this.state;
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Create room</b></p>
              <span className="close" onClick={this.handleClick}>&times;    </span>
            </div>
              <form onSubmit={this.createRoom} className="create_room">
                <div className="group-first">      
                    <input className="login-input-f" type="text" name="room_name" required/>
                    <span className="highlight"></span>
                    <span className="bar-cr"></span>
                    <label className="input-default-text"><b>Room name</b></label>
                </div>
                <div className="group">      
                    <input className="login-input-f" type="password" name="password" required/>
                    <span className="highlight"></span>
                    <span className="bar-cr"></span>
                    <label className='input-default-text'><b>Password</b></label>
                </div>
                {this.state.visible?
                <div className="select-div">
                  <Select
                  name="select"
                  styles={this.customStyles}
                  options={this.data}
                  selectMultiple={true}
                  value={selectedOptions}
                  onChange={this.handleChange}
                  isMulti
                  touchUi={false}
                  />
                </div>
                : <div></div>}
                <div className="checkbox">
                  <p className="checkbox-text">Do you want to choose cryptocurrency to compare?</p>
                  <input onClick={this.makeVis} className="checkbox-input" type="checkbox" name="One crypto type" value="True"/>
                </div>
                <button className="btn-s btn-create" type="submit">Create</button>
              </form>
          </div>
      </div>
    );
   }
  }