import React from "react";

const ContactList = (props) => {
  return (
    <ol>
      {props.contacts.map((contact) => {
        return (
          <li id="listItem" key={contact.id}>
            <p>
              Name: {contact.name} <br />
              Number: {contact.number}
            </p>
            <button onClick={() => props.delcontact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
