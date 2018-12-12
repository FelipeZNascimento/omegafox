import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './sections/header.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <body>
                    ola
                </body>
                <footer>
                    tchau
                </footer>
            </div>
        );
    }
}

export default App;