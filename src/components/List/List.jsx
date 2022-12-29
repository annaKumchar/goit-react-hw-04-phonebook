import React from 'react';
import PropTypes from 'prop-types';
import { ListEl, ListItem, ListButton } from './List.styled';

export const List = ({ contacts, deleteContact }) => (
  <ListEl>
    {contacts.map((contact, id) => (
      <ListItem key={id}>
        {contact.name}: {contact.number}
        <ListButton type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </ListButton>
      </ListItem>
    ))}
  </ListEl>
);

List.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
