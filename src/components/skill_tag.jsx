import React, { Component } from 'react';

class SkillTag extends Component {
    render () {
        return (
            <button>
                {this.props.description}
            </button>
        )
    }
}

export default SkillTag;