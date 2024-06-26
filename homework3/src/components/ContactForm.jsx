import React, { Component } from "react";
import StyleForm from "./StyleForm";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSumbit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    // vse dopisali v newcontact
    const newcontact = {
      name: name,
      number: number,
      id: Date.now(),
    };

    this.props.addnewcontact(newcontact);

    // ociwayem input
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <StyleForm>
          <label htmlFor="name">Name </label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="number">Number </label>
          <input
            id="number"
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Add new contact</button>
        </StyleForm>
      </form>
    );
  }
}
