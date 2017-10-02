
import React, { Component } from 'react';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Mainview from './components/mainView/mainView';
import Maincontainer from './components/mainContainer/mainContainer';
import Sidebar from './components/sidebar/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Mainview />
        <Maincontainer />     
        <Footer />
      </div>
    );
  }
}

export default App;
