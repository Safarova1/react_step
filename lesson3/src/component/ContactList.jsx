import React from "react";

const ContactList = (props) => {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>{contact.name} </p>
            <p>{contact.number}</p>
            <button onClick={() => props.delContact(contact.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
