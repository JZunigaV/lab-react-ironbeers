import React, { Component }  from "react";
import axios from 'axios';
import {Link, Switch, Route} from "react-router-dom";
import BeerDetail from "./BeerDetail";



class AllBeers extends Component {
  state ={
    beers:[]
  }
  componentDidMount(){
    axios.get('http://ironbeer-api.herokuapp.com/beers/all')
    .then ( res =>{
      console.log (res);
    this.setState ({beers:res.data})
  })
}

  render(){
    const beers = this.state.beers.map((beer,index) => {
          return (
            <li>
            <img src={beer.image_url} ></img>
            <h1>
             <Link to = {`/BeerDetail/${beer._id}`}>{beer.name}</Link>
            </h1>
            <h2>{beer.tagname}</h2>
            <h3>Created by: {beer.contributed_by}</h3>
            </li>
          )
      })
    return(
    <div>
      <ul>
        { beers }
      </ul>
    </div>
    )
  }
}

export default AllBeers;
