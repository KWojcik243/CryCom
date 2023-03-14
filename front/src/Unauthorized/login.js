export default function Login(){
    return (
        <div className="login">
            <form method="POST" action="{% url 'login' %}">
                <div className="login-box">
                    <div className="login-body">
                        <p className="login-text"><b>Login</b></p>
                        <p className="welcome-text"><b>Welcome to CryCom!</b></p>
                        <div className="group-first">      
                            <input className="login-input-f" type="text" name="email" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="input-default-text"><b>Email</b></label>
                        </div>
                        <div className="group">      
                            <input className="login-input-f" type="text" name="password" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className='input-default-text'><b>Password</b></label>
                        </div>
                        <a className="forgot" onClick={event =>  window.location.href='/change_password'}><b>Forgot Password?</b></a>
                        <button className="login-button" type="submit">Sign in</button>
                        <div className='or'>
                            <div className='divider'></div>
                            <p><b>or</b></p>
                            <div className='divider'></div>
                        </div>
                        <p className="create-new-account" onClick={event =>  window.location.href='/register'}>
                            <b>Create account</b>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}