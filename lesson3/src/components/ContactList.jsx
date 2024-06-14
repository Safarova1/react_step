import React from "react";

const ContactList = (props) => {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
