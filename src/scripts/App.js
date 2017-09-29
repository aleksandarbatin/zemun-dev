
import React, { Component } from 'react';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Mainview from './components/mainView/mainView';
import Homepage from './components/pages/homePage';


class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <Menu />
        <Mainview />
        	<Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
