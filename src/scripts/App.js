
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
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    toggleMenu() {
        if (!this.state.showMenu) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
           showMenu: !prevState.showMenu,
        })); //Flips true/false
    }
    handleOutsideClick(e) {
    //ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.toggleMenu();
  }
    render() {
        return (
            <div className="App">
                <div className="mainWrapper" >
                    <Header toggleMenu={this.toggleMenu} />
                    <Bigview />
                    <Maincontainer />
                </div>
                <div ref={node => { this.node = node; }}>
                    <Menu showMenu={this.state.showMenu} /> 
                </div>    
            </div>
        );
    }
}

export default App;
