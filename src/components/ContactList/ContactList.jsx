import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';
import Box from 'components/reusableComponents/Box';
import ContactsItem from '../ContactsItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLocaleLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter)
  );

  return (
    <Box as="ul" pl={0}>
      {filteredContacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </Box>
  );
}
