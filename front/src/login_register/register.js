import logo from './bitcoin-reg.jpg'
import './login.css'
export default function Register(){
    return (
        <div className="login">
            <form>
                <div className="register-box">
                    <img className="login-box-img" src={logo} alt="fge"></img>
                        <div className="login-body">
                            <p className="login-text">Register</p>
                            <input className="login-input" placeholder="First Name" name="fName">
                            </input>
                            <input className="login-input" placeholder="Last Name" name="lName">
                            </input>
                            <input className="login-input" placeholder="Email" name="email">
                            </input>
                            <input className="login-input" placeholder="Password" name="password">
                            </input>
                            <input className="login-input" placeholder="Confirm Password" name="cPassword">
                            </input>
                            <a className="forgot" >Already have an account?</a>
                            <button className="login-button" type="submit">REGISTER</button>
                        </div>
                </div>
            </form>
        </div>
    )
}
