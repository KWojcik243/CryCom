// import ReactDOM from "react-dom"
// import Nav from "../components/nav.js"
function Page(){
    let settins_status=true
    function settingsShow(e){

        console.log(settins_status);
        settins_status = !settins_status
    }
    return (
        <div>
             <div className="navbar">
                <img className="logo"src="btc-logo.png"></img>
                <button className="nav-button">HOME</button>
                <button className="nav-button">ROOMS</button>
                <button className="nav-button">BLOG</button>
                <img className="user"src="user.jpg" onClick={settingsShow}></img>
            </div> 
            <div className="options-box">
                <p>Settings</p>
                <p>Log out</p>
            </div>
            
        </div>
       
        
    )
}

ReactDOM.render(
    // <Nav />,
    <Page />,
    document.getElementById("root"))