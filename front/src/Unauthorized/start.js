import './start.css';
import ColourBackground from '../assets/ColourBackground.SVG'
import LineWaves from '../assets/LineWaves.SVG'
import Iphone from '../assets/Iphone.SVG'
import RoundedGraphs from '../assets/RoundedGraphs.SVG'
import TmpFeatureIcon from '../assets/TmpFeatureIcon.SVG'
import {FaSignInAlt} from 'react-icons/fa';
export default function Start(){
    return(
        <div className='full-site'>
            <div className='first-con'>
                <img className='colour-background' src={ColourBackground}></img>
                <div className='nav'>
                    <div className='logo'></div>
                    <div className='text-menu'>
                        <button className='text-button'><p className='specific-text-menu'><b>Home</b></p></button>
                        <button className='text-button'><p className='specific-text-menu'><b>Blog</b></p></button>
                        <button className='text-button'><p className='specific-text-menu'><b>Analitics</b></p></button>
                        <button className='text-button'><p className='specific-text-menu'><b>Rooms</b></p></button>
                        <button className='text-button'><p className='specific-text-menu'><b>About</b></p></button>
                    </div>
                    <button className='sign-in-button' onClick={event =>  window.location.href='/login'}><p className='sign-in'>Sign in<FaSignInAlt style={{fontSize: '30px'}}/></p></button>
                </div>
                <div className='compare-main-box'>
                    <div className='left-main-box'>
                        <p className='title'><b>Compare cryptocurrencies with your friends now</b></p>
                        <p className='additional-text'>Use your investment skill - compare over 180 different cryptocurrencies in private rooms, and be the king of your own destiny. Available online and on android for free.</p>        
                        <div className='left-main-box-div-buttons'>
                            <button className='left-main-box-button left-button' onClick={event =>  window.location.href='/register'}><p className='start-now'>Start now</p></button>
                            <button className='left-main-box-button right-button'><p className='contact'>Contact</p></button>
                        </div>       
                    </div>
                    <img src={Iphone} alt="React Logo" />
                </div>
            </div>
            <div className='second-con'>
                <div className='second-group'>
                    <img className='colour-background' src={LineWaves}></img>
                    <div className='second-group-text'>
                        <img src={RoundedGraphs}></img>
                        <div className='right-second-box'>
                            <p className='title'><b>Interactive diagrams for a huge amount of cryptocurrencies</b></p>
                            <p className='additional-text'>You can see price at a specific moment in history thanks to modern designed charts. Just select the time interval and hover your mouse over a point to get more information.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='second-con'>
                <div className='third-group'>
                    <p className='title-join-com'><b>Join our community</b></p>
                    <div className='second-group-text'>
                        <div>
                            <div className='feature'>
                                <img src={TmpFeatureIcon}></img>
                                <p className='gradient-text'> <b>Create rooms</b></p>
                                <p className='text'>Add your friends and define witch crypto you will compare</p>
                            </div>
                            <div className='feature'>
                                <img src={TmpFeatureIcon}></img>
                                <p className='gradient-text'> <b>Automatic updates</b></p>
                                <p className='text'>Actual data updated every 5 min. Look at the timer and wait to be a millionaire </p>
                            </div>
                        </div>
                        <div>
                            <div className='feature'>
                                <img src={TmpFeatureIcon}></img>
                                <p className='gradient-text'> <b>Over 180 crypto</b></p>
                                <p className='text'>Get access to data from the beginning to now in a few seconds</p>
                            </div>
                            <div className='feature'>
                                <img src={TmpFeatureIcon}></img>
                                <p className='gradient-text'> <b>Create rooms</b></p>
                                <p className='text'>Add your friends and define witch crypto you will compare</p>
                            </div>
                        </div>
                    </div>
                    <button className='join_now' onClick={event =>  window.location.href='/register'}><p className='join-now'>Join now!</p></button>
                </div>
            </div>
        </div>
    )
}
