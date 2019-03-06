import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import AllBeers from "./components/AllBeers";
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/allbeers" component={AllBeers}/>
           <Route path="/BeerDetail/:_id" component={BeerDetail}/>

        </Switch>
      </div>


    );
  }
}

export default App;
