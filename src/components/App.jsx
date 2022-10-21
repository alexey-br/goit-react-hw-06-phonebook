import { useState, useEffect } from 'react';
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

export default function App() {
  const [contacts, setContacts] = useState(() =>
    localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY)) : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const normalizedNewName = newContact.name.toLowerCase();
    if (contacts.some(({ name }) => name.toLowerCase() === normalizedNewName)) {
      alert(`${newContact.name} is alredy in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { id: nanoid(), ...newContact }]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterInput = e => {
    setFilter(e.currentTarget.value);
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
}
