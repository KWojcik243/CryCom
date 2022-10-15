function Page(){
    return (
        <div className="login">
            <form>
                <div className="register-box">
                    <img className="login-box-img" src="./bitcoin-reg.jpg" alt="fge"></img>
                        <p className="login-text">
                            Register
                            
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
                            {/* <p className="already-have">
                                Create a new account
                            </p> */}
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
