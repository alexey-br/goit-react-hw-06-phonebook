import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  Contact,
  ContactIcon,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactIcon />
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </Contact>
  );
}

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
