import './login.css'
import React, {useContext} from "react"
import {Navigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext"
export default function Register(){
    let {user, registerUser} = useContext(AuthContext)
    if(user){
        return <Navigate to="/home"/>
    }else{
        return (
            <div className="login">
                    <div className="login-box">
                            <div className="login-body">
                                <form onSubmit={registerUser}>
                                    <p className="register-text login-text"><b>CryCom!</b></p>
                                    <div className="group-first">      
                                        <input className="register-input-f" type="text" name="username"required/>
                                        <span className="highlight"></span>
                                        <span className="bar bar-color"></span>
                                        <label className="input-default-text"><b>Nickname</b></label>
                                    </div>
                                    <div className="group-first">      
                                        <input className="register-input-f" type="text" name="email" required/>
                                        <span className="highlight"></span>
                                        <span className="bar bar-color"></span>
                                        <label className="input-default-text"><b>Email</b></label>
                                    </div>
                                    <div className="group-first">      
                                        <input className="register-input-f" type="password" name="password" required/>
                                        <span className="highlight"></span>
                                        <span className="bar bar-color"></span>
                                        <label className="input-default-text"><b>Password</b></label>
                                    </div>
                                    <div className="group last-group">      
                                        <input className="register-input-f" type="password" name="password2" required/>
                                        <span className="highlight"></span>
                                        <span className="bar bar-color"></span>
                                        <label className='input-default-text'><b>Confirm password</b></label>
                                    </div>
                                    <button className="login-button register-button" type="submit">Join now</button>
                                </form>
                                <div className='or'>
                                    <div className='divider'></div>
                                    <p><b>or</b></p>
                                    <div className='divider'></div>
                                </div>
                                <p className="create-new-account back-sign-in" onClick={event =>  window.location.href='/login'}>
                                    <b>Sign in</b>
                                </p>
                            </div>
                    </div>
            </div>
        )
    }
}
