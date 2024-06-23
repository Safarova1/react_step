import React, { Component } from "react";
import ContactList from "./ContactList";
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
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  delcontact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  // soxranyayem v sostoyanii
  componentDidMount() {
    const savecontacts = JSON.parse(localStorage.getItem("contacts"));
    if (savecontacts) {
      this.setState({ contacts: savecontacts });
    }
  }

  // proveryayem prediduyuwee s seycasnim sostoyaniem ravni ili net pri obnovlenii
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <>
        <h1> Contact form</h1>
        <ContactForm addnewcontact={this.addnewcontact} />
        <h1>contact book</h1>
        <ContactList
          contacts={this.state.contacts}
          delcontact={this.delcontact}
        />
      </>
    );
  }
}
