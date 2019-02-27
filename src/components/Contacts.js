import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jode@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Kerry Kon",
        email: "kk@gmail.com",
        phone: "777-777-7777"
      },
      {
        id: 3,
        name: "Larry Lame",
        email: "ll@gmail.com",
        phone: "666-666-6666"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
