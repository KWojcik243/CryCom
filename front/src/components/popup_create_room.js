import React, { useState, useContext } from "react";
import Select from 'react-select';
import AuthContext from "../context/AuthContext"
import './popup_create_room.css'

export default function PopUpCreateRoom (props) {
  let {authTokens} = useContext(AuthContext)
  
  const data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  let [visible, setVisible] = useState(false);
  let [selectedOptions, setSelectedOptions] = useState([]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //     selectedOptions: [],
  //   };
  // };
  
  let handleChange = (selectedOptions) => {
    setSelectedOptions( selectedOptions );
  }

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

    
  let createRoom = async(e) => {
    e.preventDefault()
    let selected = selectedOptions.map(o => o.value).join(",")
    console.log(selected)
    let response = await fetch('http://localhost:8000/api/create_group/', {
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        },
        body:JSON.stringify({'name':e.target.room_name.value,'password':e.target.password.value, "crypto_type": selected})
    })

    let data = await response.json()
    if (response.status === 201){
        handleClick()
    }else{
        alert('Something went wrong!')
    }
  }
  
  let handleClick = () => {
    props.toggle();
   };
  
  let makeVis = () => {
    setVisible(!visible)
  };
  const customStyles = {
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
  
  
    // const { selectedOptions } = this.state;
    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Create room</b></p>
              <span className="close" onClick={handleClick}>&times;    </span>
            </div>
              <form onSubmit={createRoom} className="create_room">
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
                {visible?
                <div className="select-div">
                  <Select
                  name="select"
                  styles={customStyles}
                  options={data}
                  selectMultiple={true}
                  value={selectedOptions}
                  onChange={handleChange}
                  isMulti
                  touchUi={false}
                  />
                </div>
                : <div></div>}
                <div className="checkbox">
                  <p className="checkbox-text">Do you want to choose cryptocurrency to compare?</p>
                  <input onClick={makeVis} className="checkbox-input" type="checkbox" name="One crypto type" value="True"/>
                </div>
                <button className="btn-s btn-create" type="submit">Create</button>
              </form>
          </div>
      </div>
  ); 
  
  }