import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <img src="" alt="" />
          <Link to="/AllBeers">All Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            molestie enim. Maecenas et elit mi. Curabitur mollis at sapien vitae
            ultrices.{" "}
          </p>
        </div>
        <div className="section">
          <img src="" alt="" />
          <Link to="/RandomBeer">Random Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            molestie enim. Maecenas et elit mi. Curabitur mollis at sapien vitae
            ultrices.{" "}
          </p>
        </div>
        <div className="section">
          <img src="" alt="" />
          <Link to="/NewBeer">New Beers</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            molestie enim. Maecenas et elit mi. Curabitur mollis at sapien vitae
            ultrices.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
