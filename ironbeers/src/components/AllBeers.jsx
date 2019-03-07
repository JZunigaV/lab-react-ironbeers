import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

class AllBeers extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios.get("http://ironbeer-api.herokuapp.com/beers/all").then(res => {
      console.log(res);
      this.setState({ beers: res.data });
    });
  }

  render() {
    const beers = this.state.beers.map((beer, index) => {
      return (
        <div key={index} className="columns is-mobile is-centered is-vcentered">
          <div className="column">
            <img className="beer-image" src={beer.image_url} alt={beer.name} />
          </div>

          <div className="column">
            <span className="title">
              {" "}
              <Link to={`/BeerDetail/${beer._id}`}>{beer.name}</Link>
              <br />
              <span className="subtitle">{beer.tagline}</span>
              <br />
              <span className="subtitle">
                Created by: {beer.contributed_by}
              </span>
            </span>
          </div>
          <hr />
        </div>
      );
    });

    return (
      <div>
        <Header />

        <ul>{beers}</ul>
      </div>
    );
  }
}

export default AllBeers;
