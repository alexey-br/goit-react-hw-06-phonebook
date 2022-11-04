import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './reusableComponents/Box';
import { HeaderH1, HeaderH2 } from './reusableComponents/Headers';

export default function App() {
  return (
    <Box m={4}>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactForm />
      <HeaderH2>Contacts:</HeaderH2>
      <Filter />
      <ContactList />
    </Box>
  );
}
