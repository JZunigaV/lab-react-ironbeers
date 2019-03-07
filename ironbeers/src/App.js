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
    success: false,
  };

  addBeerHandler = newBeer => {
    newBeer.attenuation_level = parseInt(newBeer.attenuation_level);

    this.setState({
      newBeer: newBeer,
    });

    var self = this;
    axios({
      method: "POST",
      url: "https://ironbeer-api.herokuapp.com/beers/new",
      data: newBeer,
      config: { headers: { "Content-Type": "application/json" } },
    })
      .then(function(response) {
        debugger;
        console.log(response);
        if (response.status === 200) {
          self.setState({
            success: true,
          });
        } else {
          self.setState({
            success: false,
          });
        }
      })
      .catch(function(response) {
        debugger;
        console.log(response);

        self.setState({
          success: false,
        });
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
            render={props => (
              <NewBeer
                addBeer={this.addBeerHandler}
                status={this.state.success}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
