import React, { Component } from "react";
import Header from "./Header";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  onChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleFormSubmit = event => {
    debugger;
    event.preventDefault();
    //Aqui se Agrega la cerveza
    this.props.addBeer(this.state);

    this.setState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h1 className="title is-1"> New Beer</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tagline</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Tagline"
                name="tagline"
                value={this.state.tagline}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Description"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">First brewed</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="First brewed"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Brewer's Tips</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Brewer's Tips"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Attenuation level</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Attenuation"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Contributed by</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Contributed by"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link">Add new</button>

              {this.props.status ? (
                <label className="label">Beer saved Succesfuly</label>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
