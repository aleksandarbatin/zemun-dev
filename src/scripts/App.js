
import React, { Component } from 'react';

// components
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Mainview from './components/mainView';
import Maincontainer from './components/mainContainer';
import Sidebar from './components/sidebar';


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
