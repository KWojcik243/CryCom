import './footer.css';
import Instagram from './instagram.png'
import Github from './github-sign.png'
import Linkedin from './linkedin.png'
// import {FiFacebook} from 'react-icons/fi';
import {FiLinkedin, FiFacebook, FiInstagram} from 'react-icons/fi';
// import {FiInstagram} from 'react-icons/fi';
export default function Footer() {
    return (
        <div className="footer">
            <div className='main-footer'>
                <div className='logo'></div>
                <p className='text'>CREATED WITH &#10084;&#65039; BY KACPER WOJCIK</p>
                <div className='social'>
                        <a href='https://www.facebook.com/TheOvecka/'>
                        <FiFacebook style={{fontSize: '30px'}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kacper-wojcik243/'>
                        <FiLinkedin style={{fontSize: '30px'}}/>
                    </a>
                    <a href='https://www.instagram.com/theovecka/'>
                        <FiInstagram style={{fontSize: '30px'}}/>
                    </a>
                </div>
            </div>
            <div className='secondary-footer'>
                <div>
                    <p className='text'>© 2023 CryCom. All rights reserved.</p>
                </div>
                <div>
                    <button className='ref'><p className='text'>Privacy</p></button>
                    <button className='ref'><p className='text'>Contact</p></button>
                    <button className='ref'><p className='text'>FAQ</p></button>
                </div>
            </div>
        </div>
    )
}