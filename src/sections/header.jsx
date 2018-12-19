import React, { Component } from 'react';
import Menu from '../components/menu.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);

class Header extends Component {
    render () {
        return (
            <header id="header">
                <div className="header-container">
                    <Menu visible={this.props.visible} mobile={this.props.mobile}/>
                    <div className="image-mask row-oriented">
                        web developer<br/>
                        <a href="#about"><FontAwesomeIcon icon="chevron-down" /></a>
                    </div>
                </div>                
            </header>
        )
    }
}

export default Header;