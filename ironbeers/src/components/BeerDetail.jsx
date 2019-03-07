import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  state = {
    beer: {},
  };
  componentDidMount() {
    axios
      .get(
        `http://ironbeer-api.herokuapp.com/beers/single/${
          this.props.match.params._id
        }`,
      )
      .then(res => {
        console.log(res);
        this.setState({ beer: res.data });
      });
  }

  render() {
    return (
      <li>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <h1>{this.state.beer.name}</h1>
        <h2>{this.state.beer.tagline}</h2>
        <h2>{this.state.beer.first_brewed}</h2>
        <h3>{this.state.beer.attenuation_level}</h3>
        <p>{this.state.beer.description}</p>
        <h3>Created by: {this.state.beer.contributed_by}</h3>
      </li>
    );
  }
}

export default BeerDetail;
