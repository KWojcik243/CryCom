// import Nav from "../components/nav.js"
function Page(){
    return (
        <div className="navbar">
            <img className="logo"src="btc-logo.png"></img>
            <button className="nav-button">HOME</button>
            <button className="nav-button">ROOMS</button>
            <button className="nav-button">BLOG</button>

            <img className="user"src="user.jpg"></img>
        </div>
    )
}

ReactDOM.render(
    // <Nav />,
    <Page />,
    document.getElementById("root"))