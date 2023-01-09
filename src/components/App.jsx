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
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (
      this.state.contacts.some(contact => {
        const existName = contact.name.toLowerCase();
        const newName = name.toLowerCase();
        return existName === newName;
      })
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  onContactDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const filterValue = this.state.filter;
    const contacts = this.state.contacts;
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filterValue) ||
        number.toLowerCase().includes(filterValue)
    );
    return (
      <Box ml="50px">
        <h1>Phonebook</h1>
        <ContactsForm
          onFormSubmit={this.onFormSubmit}
          values={this.state.contacts}
        ></ContactsForm>

        <h2>Contacts</h2>
        {contacts[0] && (
          <>
            <Filter
              value={this.state.filter}
              onFilterChange={this.onFilterChange}
            />
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
