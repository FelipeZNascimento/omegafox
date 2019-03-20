import React, { Component } from 'react';
import brazilFlag from '../img/brazil_flag.png';

class About extends Component {
    render () {
        return (
            <div id="about" className="section-container blue-bg">
                <div className="title">
                    <p>about Felipe</p>
                </div>
                <div className="section-content">
                    <div className="section-column">
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
                    <div className="section-column">
                        <p><b>Team player</b> and resourceful web developer based in Brazil looking for opportunities abroad - Europe and Canada specially.</p>
                        <p>Interested in both <b>front and back end</b> applications, I really enjoy learning new technologies and <b>JS frameworks</b> (as you can see in my <a href="#skills">skill list</a>).<br/>
                        I love making the most out of a mockup and delivering the closest to what designers initially imagined - receiving and providing feedback as the project goes.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;