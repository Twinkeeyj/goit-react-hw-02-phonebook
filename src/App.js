import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const contactList = [];
export default class App extends Component {
  state = {
    contacts: [...contactList],
    filter: '',
  };

  toAddContact = el => {
    this.setState(prev => {
      const updateState = [...prev.contacts, el];
      return { contacts: updateState };
    });
  };
  filterRender = filter => {
    this.setState({ filter });
  };
  filtresTask() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
  render() {
    const {contacts, filter } = this.state;
    const filterText=this.filtresTask()

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.toAddContact} />
        <h2>Contacts</h2>
        {contacts.length>1&&(<Filter value={filter} filterRender={this.filterRender}/>)}
        <ul>
          {filterText.map(el => {
            return <ContactList key={el.id} list={el} />;
          })}
        </ul>
      </div>
    );
  }
}
