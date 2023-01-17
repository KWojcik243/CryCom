import './start.css';
import ColourBackground from '../assets/ColourBackground.SVG'
import Iphone from '../assets/Iphone.SVG'
import {FaSignInAlt} from 'react-icons/fa';
export default function Start(){
    return(
        <div className='full-site'>
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
                <button className='sign-in-button'><p className='sign-in'>Sign in<FaSignInAlt style={{fontSize: '30px'}}/></p></button>
            </div>
            <div className='compare-main-box'>
                <div className='left-main-box'>
                    <p className='title'><b>Compare cryptocurrencies with your friends now</b></p>
                    <p className='additional-text'>Use your investment skill - compare over 180 different cryptocurrencies in private rooms, and be the king of your own destiny. Available online and on android for free.</p>        
                    <div className='left-main-box-div-buttons'>
                        <button className='left-main-box-button left-button'><p className='start-now'>Start now</p></button>
                        <button className='left-main-box-button right-button'><p className='contact'>Contact</p></button>
                    </div>       
                </div>
                <img src={Iphone} alt="React Logo" />
            </div>
        </div>
    )
}
