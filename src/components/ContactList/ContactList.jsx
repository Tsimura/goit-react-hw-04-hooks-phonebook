import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContactListWrapper } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ContactListWrapper>
  );
};
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
