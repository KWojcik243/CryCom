import './footer.css';
import Instagram from './instagram.png'
import Github from './github-sign.png'
import Linkedin from './linkedin.png'
export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className='footer-div'>
                    <p>You can find author on:</p>
                    <ui>
                        <li className='li-flex'><img className='footer-logo' src={Instagram} /><p className='paragrah-start'>@theovecka</p></li>
                        <li className='li-flex'><img className='footer-logo' src={Github} /><p className='paragrah-start'>KWojcik243</p></li>
                        <li className='li-flex'><img className='footer-logo' src={Linkedin} /><p className='paragrah-start'>kacper-wojcik243</p></li>
                    </ui>
                </div>
                <div className='footer-div'>
                    <p>Privacy</p>
                    <p>Contact</p>
                    <p>FQ</p>
                </div>
                <div className='footer-div'>
                    <p>Any questions?</p>
                    <input placeholder='E-mail'></input>
                    <textarea className="contact-message" placeholder="Your message"></textarea>
                </div>
            </div>
            <div className='wraper-rights'>
                <div className='footer-rights'>
                    ©CryCom - All rights reserved
                </div>
            </div>
        </div>
    )
}