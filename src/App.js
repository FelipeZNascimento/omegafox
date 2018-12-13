import React, { Component } from 'react';
import Header from './sections/header.js';
import About from './sections/about.js';
import Portfolio from './sections/portfolio.js';
import Contact from './sections/contact.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default App;