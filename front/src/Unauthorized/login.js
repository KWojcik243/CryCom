export default function Login(){
    return (
        <div className="login">
            <form method="POST" action="{% url 'login' %}">
                <div className="login-box">
                    <div className="login-body">
                        <p className="login-text"><b>Login</b></p>
                        <p className="welcome-text"><b>Welcome to CryCom!</b></p>
                        <form>
                            <div className="group-first">      
                                <input className="login" type="text" required/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className="input-default-text"><b>Email</b></label>
                            </div>
                            <div className="group">      
                                <input className="login" type="text" required/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className='input-default-text'><b>Password</b></label>
                            </div>
                        </form>
                        <a className="forgot"><b>Forgot Password?</b></a>
                        <button className="login-button" type="submit">Sign in</button>
                        <div className='or'>
                            <div className='divider'></div>
                            <p><b>or</b></p>
                            <div className='divider'></div>
                        </div>
                        <p className="create-new-account">
                            <b>Create account</b>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}