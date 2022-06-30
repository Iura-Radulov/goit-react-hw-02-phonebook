import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',  
  }

  addName = (name, number) => {
       
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleNames = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };


  render() {
    const {  filter} = this.state
    const visibleNames = this.getVisibleNames()
    
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          onSubmit={this.addName}          
        />       
        <div>
          <h2>Contacts</h2>
          <Filter changeFilter={this.changeFilter}
            filter={filter }/>
          <ContactList visibleNames={ visibleNames}/>          
          
        </div>
    </div>
  )};
};
