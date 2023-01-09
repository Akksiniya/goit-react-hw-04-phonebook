import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ContactsItem, ContactName, DeleteBtn } from './ContactsList.styled';

export const ContactsList = ({ contacts, onContactDelete }) => {
  return (
    <Box as="ul">
      {contacts.map(({ name, number, id }) => (
        <ContactsItem key={id}>
          <ContactName>{name}: </ContactName>
          {number}
          <DeleteBtn type="button" onClick={() => onContactDelete(id)}>
            Delete
          </DeleteBtn>
        </ContactsItem>
      ))}
    </Box>
  );
};

ContactsList.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
};
