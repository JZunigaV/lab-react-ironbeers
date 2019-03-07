import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import Home from "./components/Home";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  state = {
    newBeer: {},
  };

  addBeerHandler = newBeer => {
    newBeer.attenuation_level = parseInt(newBeer.attenuation_level);

    this.setState({
      newBeer: newBeer,
    });

    axios
      .post(`https://ironbeer-api.herokuapp.com/beers/new`, { newBeer })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allbeers" component={AllBeers} />
          <Route path="/BeerDetail/:_id" component={BeerDetail} />
          <Route path="/RandomBeer" component={RandomBeer} />

          <Route
            path="/NewBeer"
            render={props => <NewBeer addBeer={this.addBeerHandler} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
