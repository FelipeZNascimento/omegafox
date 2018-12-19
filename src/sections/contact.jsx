import React, { Component } from 'react';
import LinkedInIcon from '../img/icon_linkedin.png';
import EmailIcon from '../img/icon_email.png';
import GithubIcon from '../img/icon_github.png';
import TelegramIcon from '../img/icon_telegram.png';

class Contact extends Component {
    render () {
        return (
            <div id="contact" className="section-container beige-bg">
                <div className="title">
                    <p>Contact</p>
                </div>
                <div>
                    <div className="quote">
                        <blockquote><p>
                            For long you live and high you fly<br/>
                            And smiles you'll give and tears you'll cry<br/>
                            And all your touch and all you see<br/>
                            Is all your life will ever be
                        </p></blockquote>
                        <p className="right-align">Pink Floyd - Breathe</p>
                    </div>

                    <p className="center-align"><a href="mailto:felipe@omegafox.me?Subject=Hello%20Felipe">felipe@omegafox.me</a></p>
                    <p className="center-align">Skype ID: sharpion</p>
                    
                    <div className="contact">
                        <a href="https://github.com/Sharpion/">
                            <img src={GithubIcon} alt="Github link"/>
                        </a>
                        <a href="https://www.linkedin.com/in/felipezanonnascimento/">
                            <img src={LinkedInIcon} alt="LinkedIn link"/>
                        </a>
                        <a href="https://t.me/FelipeZN">
                            <img src={TelegramIcon} alt="Personal Telegram link"/>
                        </a>
                        <a href="mailto:felipe@omegafox.me?Subject=Hello%20Felipe">
                            <img src={EmailIcon} alt="Email link"/>
                        </a>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Contact;