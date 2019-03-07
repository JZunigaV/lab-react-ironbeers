import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

class RandomBeer extends Component {
  state = {
    beers: {},
  };

  //Cuando el componente se inicia
  componentDidMount() {
    axios.get("http://ironbeer-api.herokuapp.com/beers/random").then(res => {
      this.setState({ beers: res.data[0] });
    });
  }

  render() {
    return (
      <div>
        <Header />

        <img src={this.state.beers.image_url} alt={this.state.beers.name} />
        <ul>
          <li>{this.state.beers.name}</li>
          <li>{this.state.beers.tagline}</li>
          <li>{this.state.beers.first_brewed}</li>
          <li>{this.state.beers.attenuation_level}</li>
          <li>{this.state.beers.description}</li>
          <li>{this.state.beers.contributed_by}</li>
        </ul>
      </div>
    );
  }
}

export default RandomBeer;
