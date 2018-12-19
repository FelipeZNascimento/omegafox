import React, { Component } from 'react';

class Experience extends Component {
    render () {
        return (
            <div className="experience">
                <div className="left-column center-align">
                    <b>{this.props.company}</b>
                    <p>{this.props.start} - {this.props.end}</p>
                </div>
                <div className="right-column">
                    <b>{this.props.title}</b>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Experience;