import React, { Component } from "react";
import Booklist from "./Booklist";
import ContactForm from "./ContactForm";

export default class ContactBook extends Component {
  state = {
    contacts: [
      {
        name: "Sama",
        number: 773120721,
        id: 1,
      },
      {
        name: "Lali",
        number: 553520756,
        id: 2,
      },
      {
        name: "John",
        number: 703120886,
        id: 3,
      },
      {
        name: "Lala",
        number: 553524456,
        id: 4,
      },
    ],
  };

  addnewcontact = (newcontact) => {
    this.setState({ contacts: [...this.state.contacts, newcontact] });
  };

  delcontact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };

  render() {
    return (
      <>
        <h1> Contact form</h1>
        <ContactForm addnewcontact={this.addnewcontact} />
        <h1>contact book</h1>
        <Booklist contacts={this.state.contacts} delcontact={this.delcontact} />
      </>
    );
  }
}
