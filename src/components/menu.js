import React, { Component } from 'react';
import MenuButton from '../components/menu_button.js';
import './menu.scss';
import menuFox from '../img/menu_fox.png';

let menuButtons = [
    {id:0, description: "resume", link: "#about"},
    {id:1, description: "portfolio", link: "#portfolio"},
    {id:2, description: "contact", link: "#contact"}
]

class Menu extends Component {
    render () {
        const renderButtons = menuButtons.map((button, id) => {
            return (
                <MenuButton key={button.id} link={button.link} description={button.description} />
            )
        });
        
        return (
            <div className="sticky">
                <div className="menu-container">
                    <div className="left-side">
                        <MenuButton link="#about" description="felipe zanon do nascimento"/>
                    </div>
                    <div className="middle">&nbsp;</div>
                    <img className="menu-fox" src={menuFox} alt="Omega Fox logo" />
                    <div className="right-side">
                        {renderButtons}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;