import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
