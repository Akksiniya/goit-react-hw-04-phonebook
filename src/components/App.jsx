import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';

import { ContactsForm } from './form/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilterChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  onFormSubmit = ({ name, number }) => {
    const existContact = this.state.contacts.some(contact => {
      const existName = contact.name.toLowerCase();
      const newName = name.toLowerCase();
      return existName === newName;
    });

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  onContactDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  getFilteredContacts = ({ filter, contacts }) =>
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter) ||
        number.toLowerCase().includes(filter)
    );

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('edit cont');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts({ filter, contacts });
    return (
      <Box ml="50px">
        <h1>Phonebook</h1>
        <ContactsForm
          onFormSubmit={this.onFormSubmit}
          values={contacts}
        ></ContactsForm>

        <h2>Contacts</h2>
        {contacts.length > 0 && (
          <>
            <Filter value={filter} onFilterChange={this.onFilterChange} />
            <ContactsList
              contacts={filteredContacts}
              onContactDelete={this.onContactDelete}
            />
          </>
        )}
      </Box>
    );
  }
}
