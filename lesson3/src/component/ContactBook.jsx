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

  delContact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };

  componentDidMount = () => {
    console.log("Did Mount");
  };

  componentDidUpdate = () => {
    console.log("update");
  };
  render() {
    return (
      <>
        <h1>Contact Book</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <ContactList
          contacts={this.state.contacts}
          delContact={this.delContact}
        />
      </>
    );
  }
}

export default ContactBook;
