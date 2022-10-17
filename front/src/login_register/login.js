import logo from './bitcoin_login.jpeg'
export default function Login(){
    return (
        <div className="login">
            <form method="POST" action="{% url 'login' %}">
                <div className="login-box">
                    <img className="login-box-img" src={logo} alt="fge"></img>
                        <p className="login-text">
                            Login
                            <input className="login-input" placeholder="Login" name="login">
                            </input>
                            <input className="login-input" placeholder="Password" name="password">
                            </input>
                            <a className="forgot" >Forgot Password?</a>
                            <button className="login-button" type="submit">LOGIN</button>
                            <p className="create-new-account">
                                Create a new account
                            </p>
                        </p>
                </div>
            </form>
        </div>
    )
}