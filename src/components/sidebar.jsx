import React, { Component } from 'react';
import menuFox from '../img/menu_fox.png';
import Scrollspy from 'react-scrollspy';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }
    renderDesktop = () => {
        return (
            <div className={'sidebar-container ' + (!this.props.visible ? 'hidden' : '')}>
                <div className="sidebar-content">
                    <a href="#header"><img className="fox" src={menuFox} alt="Omega Fox logo" /></a>
                    <Scrollspy items={ ['about', 'resume', 'portfolio', 'contact'] } currentClassName="is-current">
                        <li><div><a href="#about">about</a></div></li>
                        <li><div><a href="#resume">resume</a></div></li>
                        <li><div><a href="#portfolio">portfolio</a></div></li>
                        <li><div><a href="#contact">contact</a></div></li>
                    </Scrollspy>
                </div>
            </div>
        )
    }

    render () {
        return (
            this.props.mobile ? '' : this.renderDesktop()
        )
    }
}

export default Sidebar;