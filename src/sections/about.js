import React, { Component } from 'react';
import './about.scss';
import brazilFlag from '../img/brazil_flag.png';

class About extends Component {
    render () {
        return (
            <div id="about" className="about-container">
                <div className="title">
                    <p>About Felipe</p>
                </div>
                <div className="about-content">
                    <div className="column">
                        <p>
                            <b>Name</b><br/>
                            Felipe Zanon do Nascimento
                        </p>
                        <p>
                            <b>Age</b><br/>
                            28
                        </p>
                        <p>
                            <b>Location</b><br/>
                            <img src={brazilFlag} className="flag" alt="Brazil' Flag" /> Curitiba, Brazil
                        </p>
                    </div>
                    <div className="column">
                        <p>Team player and resourceful webdeveloper based in Brazil looking for opportunities abroad - Europe and Canada specially.</p>
                        <p>Interested in both front and back end applications, I fully enjoy learning new technologies and JS frameworks.<br/>
                        I love making the most out of a mockup and delivering the closest to what designers initially imagined - receiving and providing feedback as the project goes.</p>
                    </div>
                </div>
            </div>            
        )
    }
}

export default About;