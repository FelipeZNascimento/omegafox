import React, { Component } from 'react';
import '../sections/header.scss';

class MenuButton extends Component {
    render () {
        return (
            <span>
                <a href={this.props.link} alt={this.props.description}>{this.props.description}</a>
            </span>    
        )
    }
}

export default MenuButton;