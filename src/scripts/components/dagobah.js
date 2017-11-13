//-------------------------
//------------ DAGOBAH comp
//-------------------------

// TEST FETCH METHOD AJAX CALL !!!!

import React, { Component } from 'react';

class Dagobah extends Component {
  // State:
  // { loading: true }
  // { loading: false, planet: { name, climate, terrain } }
  // { loading: false, error: any }
  constructor(props){
      super(props);
      this.state = { loading: true };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderPlanet() {
    const { name, climate, terrain } = this.state.planet;
    return (
      <div>
        <h2>{name}</h2>
        <div>Climate: {climate}</div>
        <div>Terrain: {terrain}</div>
      </div>
    );
  }

   render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.planet) {
      return this.renderPlanet();
    } else {
      return this.renderError();
    }
  }
}

export default Dagobah;