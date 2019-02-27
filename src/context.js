import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
