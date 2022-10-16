import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './reusableComponents/Box';
import {
  HeaderH1,
  HeaderH2,
} from './reusableComponents/Headers/Headers.styled';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is alredy in contacts`);

      return;
    }
    setContacts(state => [...state, { id: nanoid(), ...newContact }]);
  };

  const handleDeleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterInput = e => {
    setFilter(e.currentTarget.value);
    // this.filteredList = this.filterContacts(this.state.filter);
  };

  return (
    <Box m={4}>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactForm addContact={handleAddContact} />
      <HeaderH2>Contacts:</HeaderH2>
      <Filter text={filter} onInput={handleFilterInput} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Box>
  );
};
