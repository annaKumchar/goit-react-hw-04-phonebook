import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormEl, FormLabel, InputEl, ButtonEl } from './Form.styled';
import { nanoid } from 'nanoid';

export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let NameId = nanoid();
  let NumberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormLabel htmlFor={NameId}>
        Name
        <InputEl
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></InputEl>
      </FormLabel>

      <FormLabel htmlFor={NumberId}>
        Number
        <InputEl
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></InputEl>
      </FormLabel>
      <ButtonEl>Add contact</ButtonEl>
    </FormEl>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
