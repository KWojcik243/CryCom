import React, { useContext } from "react";
import AuthContext from "../context/AuthContext"
import './popup_create_room.css'
import Select from 'react-select';

export default function PopUpAddValues (props, room_id) {
  const data = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'ethernum', label: 'Ethernum' },
  ]
  let {authTokens} = useContext(AuthContext)
  let addCrypto = async(e) => {
    e.preventDefault()
    console.log(e.target.select.value, e.target.buy_price.value, e.target.quantity.value)
    // let response = await fetch('http://localhost:8000/api/add_value/', {
    //     method:'POST',
    //     headers:{
    //         'Content-type':'application/json',
    //         'Authorization':'Bearer ' + String(authTokens.access)
    //     },
    //     body:JSON.stringify({'room_token':e.target.room_token.value,'password':e.target.password.value})
    // })

    // let data = await response.json()
    // console.log(response)
    // if (response.status === 201){

    // }else{
    //     alert('Something went wrong!')
    // }
  }

  let handleClick = () => {
   props.toggle();
  };
  
  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      border: '2px solid #D1D1D1',
      fontFamily: 'Cabin',
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

    return (
      <div className="dark-background">
         <div className="box">
            <div className="box-bar">
              <p className="title-cr"><b>Add crypto</b></p>
              <span className="close" onClick={handleClick}>&times;    </span>
            </div>
              <form onSubmit={addCrypto} className="create_room">
                <Select
                name="select"
                styles={customStyles}
                options={data}
                selectMultiple={true}
                touchUi={false}
                />
                <div className="group-first" style={{marginTop:"30px"}}>      
                    <input className="register-input-f" type="number" step="0.00000001" name="buy_price" required/>
                    <span className="highlight"></span>
                    <span className="bar bar-color"></span>
                    <label className="input-default-text"><b>Buy price</b></label>
                </div>
                <div className="group">      
                    <input className="register-input-f" type="number" step="0.00000001" name="quantity" required/>
                    <span className="highlight"></span>
                    <span className="bar bar-color"></span>
                    <label className='input-default-text'><b>Quantity</b></label>
                </div>
                <button className="btn-s btn-join" type="submit">Add</button>
              </form>
          </div>
      </div>
    );
  }