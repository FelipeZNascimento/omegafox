import React, { Component } from 'react';

class InfoImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };

        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }
    
      toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    
    render () {
        const image = {
            backgroundImage: "url("+this.props.image+")",
            backgroundSize: "100% 100%"
        }
      

        return (
            <a href={this.props.url}>
                <div className="image-container"
                style={image}
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                    <div className={this.state.isHovering || this.props.mobile ? 'image-description transition' : 'hidden'}>
                        <p className={this.state.isHovering || this.props.mobile ? 'transition sub-title bottom-border' : 'hidden from-right'}>
                            {this.props.title}
                        </p>
                        <p className={this.state.isHovering || this.props.mobile ? 'transition description' : 'hidden from-right'}>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </a>         
        )
    }
}

export default InfoImage;