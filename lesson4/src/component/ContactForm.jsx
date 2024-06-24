import { Component } from "react";
 
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
 
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
 
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const newContact = {
      id: Date.now(),
      name: name,
      number: number,
    };
    console.log("this.props :>> ", this.props);
    this.props.addNewContact(newContact);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
          type="text"
        />
        <label>Number</label>
        <input
          onChange={this.handleChange}
          value={this.state.number}
          name="number"
          type="text"
        />
        <button type="submit">Add New Contact</button>
      </form>
    );
  }
}
 
export default ContactForm;