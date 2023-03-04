import './login.css'
export default function Register(){
    return (
        <div className="login">
                <div className="login-box">
                        <div className="login-body">
                            {/* <p className="login-text">Register</p> */}
                            {/* <input className="login-input" placeholder="First Name" name="fName">
                            </input>
                            <input className="login-input" placeholder="Last Name" name="lName">
                            </input>
                            <input className="login-input" placeholder="Email" name="email">
                            </input>
                            <input className="login-input" placeholder="Password" name="password">
                            </input>
                            <input className="login-input" placeholder="Confirm Password" name="cPassword">
                            </input> */}
                            <p className="register-text login-text"><b>CryCom!</b></p>
                            <form>
                                <div className="group-first">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label className="input-default-text"><b>Nickname</b></label>
                                </div>
                                <div className="group-first">      
                                    <input type="text" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label className="input-default-text"><b>Email</b></label>
                                </div>
                                <div className="group-first">      
                                    <input type="password" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label className="input-default-text"><b>Password</b></label>
                                </div>
                                <div className="group last-group">      
                                    <input type="password" required/>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label className='input-default-text'><b>Confirm password</b></label>
                                </div>
                            </form>
                            <button className="login-button register-button" type="submit">Join now</button>
                            <div className='or'>
                                <div className='divider'></div>
                                <p><b>or</b></p>
                                <div className='divider'></div>
                            </div>
                            <p className="create-new-account back-sign-in">
                                <b>Sign in</b>
                            </p>
                        </div>
                </div>
        </div>
    )
}
