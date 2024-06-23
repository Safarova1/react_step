import React from "react";

const Booklist = (props) => {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Number: {contact.number}</p>
            <button onClick={() => props.delcontact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Booklist;
