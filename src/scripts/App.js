
import React, { Component } from 'react';

// components
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Bigview from './components/bigView';
import Maincontainer from './components/mainContainer';
import Sidebar from './components/sidebar';


class App extends Component {
    constructor(props){
        super(props);
        this.state = { showMenu: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu }); //Flips true/false
    }
    render() {
        return (
            <div className="App">
                <Header toggleMenu={this.toggleMenu} />
                <Menu showMenu={this.state.showMenu} />
                <Bigview />
                <Maincontainer />     
            </div>
        );
    }
}

export default App;
