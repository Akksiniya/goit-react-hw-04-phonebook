import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';

import { ContactsForm } from './form/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const existContact = contacts.some(contact => {
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

    setContacts(contacts => [...contacts, newContact]);
  };

  const onFilterChange = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const onContactDelete = itemId => {
    setContacts(contacts.filter(contact => contact.id !== itemId));
  };

  const getFilteredContacts = ({ filter, contacts }) =>
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter) ||
        number.toLowerCase().includes(filter)
    );

  const filteredContacts = getFilteredContacts({ filter, contacts });

  return (
    <Box ml="50px">
      <h1>Phonebook</h1>
      <ContactsForm
        onFormSubmit={onFormSubmit}
        values={contacts}
      ></ContactsForm>

      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter value={filter} onFilterChange={onFilterChange} />
          <ContactsList
            contacts={filteredContacts}
            onContactDelete={onContactDelete}
          />
        </>
      )}
    </Box>
  );
}
