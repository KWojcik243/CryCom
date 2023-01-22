import './footer.css';
import Instagram from './instagram.png'
import Github from './github-sign.png'
import Linkedin from './linkedin.png'
// import {FiFacebook} from 'react-icons/fi';
import {FiLinkedin, FiFacebook, FiInstagram} from 'react-icons/fi';
// import {FiInstagram} from 'react-icons/fi';
export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className='main-footer'>
                    <div className='logo'></div>
                    <p className='text'>CREATED BY KACPER WOJCIK</p>
                    <div className='social'>
                        <FiFacebook style={{fontSize: '30px'}}/>
                        <FiLinkedin style={{fontSize: '30px'}}/>
                        <FiInstagram style={{fontSize: '30px'}}/>
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
        </div>
    )
}