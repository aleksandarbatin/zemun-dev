
import React, { Component } from 'react';

// components
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Bigview from './components/bigView';
import Maincontainer from './components/mainContainer';
import Sidebar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Bigview />
        <Maincontainer />     
        <Footer />
      </div>
    );
  }
}

export default App;
