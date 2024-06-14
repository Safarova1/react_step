import { Component } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

class ContactBook extends Component {
  state = {
    contacts: [
      {
        name: "Murtuz",
        number: 955233123,
        id: 1,
      },
      {
        name: "Gurban",
        number: 9512333123,
        id: 2,
      },
      {
        name: "Azer",
        number: 125233123,
        id: 3,
      },
    ],
  };

  addNewContact = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  componentDidMount = () => {
    console.log("Did Mount");
  };

  componentDidUpdate = () => {
    console.log("updated");
  };

  render() {
    return (
      <>
        <h1>Contact Book</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default ContactBook;
