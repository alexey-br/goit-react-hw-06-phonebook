import { useSelector } from 'react-redux';
// import parseLocalStorageData from '../services/parseLocalStorageData';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import Box from './reusableComponents/Box';
import {
  HeaderH1,
  HeaderH2,
} from './reusableComponents/Headers/Headers.styled';

export default function App() {
  const contacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState(() =>
  //   localStorage.getItem(LS_KEY) ? parseLocalStorageData(LS_KEY) : []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = newContact => {
  //   const normalizedNewName = newContact.name.toLowerCase();
  //   if (contacts.some(({ name }) => name.toLowerCase() === normalizedNewName)) {
  //     alert(`${newContact.name} is alredy in contacts`);
  //     return;
  //   }

  //   setContacts(prevState => [...prevState, { id: nanoid(), ...newContact }]);
  // };

  // const handleDeleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const handleFilterInput = e => {
  //   filter = e.currentTarget.value;
  // };

  return (
    <Box m={4}>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactForm />
      <HeaderH2>Contacts:</HeaderH2>
      <Filter />
      <ContactList contacts={contacts} onDeleteContact={addContact} />
    </Box>
  );
}
