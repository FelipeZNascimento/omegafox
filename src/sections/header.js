import React, { Component } from 'react';
import './header.scss';
import Menu from '../components/menu.js';

class Header extends Component {
    render () {
        return (
            <header id="header">
                <div className="header-container">
                    <Menu />
                    <div className="image-mask">
                        web developer
                    </div>
                </div>                
            </header>
        )
    }
}

export default Header;