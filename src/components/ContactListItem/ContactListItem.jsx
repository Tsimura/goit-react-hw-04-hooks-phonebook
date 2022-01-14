import PropTypes from 'prop-types';
import { ImUserMinus } from 'react-icons/im';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        <ImUserMinus size={18}></ImUserMinus>
      </button>
    </>
  );
};
ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
