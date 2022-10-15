
// function submitForm(){
//     console.log("hej");
// }

function Page(){
    return (
        <div className="login">
            <form method="POST" action="{% url 'login' %}">
                <div className="login-box">
                    <img className="login-box-img" src="./bitcoin_login.jpeg" alt="fge"></img>
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

ReactDOM.render(
    <Page />,
    document.getElementById("root"))

// ReactDOM.render(<h1>hejka</h1>), document.getElementById("root"))
