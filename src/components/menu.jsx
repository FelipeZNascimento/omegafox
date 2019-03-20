import React, { Component } from 'react';
import MenuButton from './menu_button.jsx';
import menuFox from '../img/menu_fox.png';

let menuButtons = [
    {id:0, description: "about", link: "#about"},
    {id:1, description: "resume", link: "#resume"},
    {id:2, description: "portfolio", link: "#portfolio"},
    {id:3, description: "contact", link: "#contact"}
]

class Menu extends Component {

    render () {
        const renderButtons = menuButtons.map((button, id) => {
            return (
                <MenuButton key={button.id} link={button.link} description={button.description} />
            ) 
        });

        return (    
            <div className={'sticky top-bar ' + (!this.props.visible && !this.props.mobile ? 'hidden' : '')}>
                <div className={'menu-container ' + (this.props.mobile ? 'black-bg' : 'fox-bg')}>
                    <div className={this.props.mobile ? 'no-display' : 'left-side'}>
                        <MenuButton link="#about" description="felipe zanon do nascimento"/>
                    </div>
                    <div className={this.props.mobile ? 'no-display' : 'middle'}>&nbsp;</div>
                    <img className="menu-fox" src={menuFox} alt="Omega Fox logo" />
                    <div className={this.props.mobile ? 'full-menu' : 'right-side'}>
                        {renderButtons}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;