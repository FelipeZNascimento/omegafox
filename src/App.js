import React, { Component } from 'react';
import Header from './sections/header.jsx';
import Sidebar from './components/sidebar.jsx';
import About from './sections/about.jsx';
import Resume from './sections/resume.jsx';
import Portfolio from './sections/portfolio.jsx';
import Contact from './sections/contact.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerFocus: true,
            mobileRes: false
        };
    }
    resize () {
        let mobileRes = (window.innerWidth < 768);
        if (mobileRes !== this.state.mobileRes) {
            this.setState({mobileRes: mobileRes});
        }
    }

    handleScroll (e) {
        let headerFocus;
        if (window.pageYOffset >= window.innerHeight)
            headerFocus = false;
        else
            headerFocus = true;
        
        this.setState({
            headerFocus:headerFocus
        });
        return;
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll()); //Listener for scroll event
        this.resize();
    }
    
    render() {
        return (
            <div>
                <Header visible={this.state.headerFocus} mobile={this.state.mobileRes}/>
                <Sidebar visible={!this.state.headerFocus} mobile={this.state.mobileRes}/>
                <About />
                <Resume />
                <Portfolio mobile={this.state.mobileRes}/>
                <Contact />
            </div>
        );
    }
}

export default App;