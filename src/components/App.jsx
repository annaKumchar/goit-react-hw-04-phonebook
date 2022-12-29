import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhonebookWrap } from './Section/Section.styled';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addListItem = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    if (contacts.some(e => e.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const getVizibleContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  const vizibleContacts = getVizibleContacts();

  return (
    <div>
      <PhonebookWrap>
        <Section title="Phonebook">
          <Form onSubmit={addListItem}></Form>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <List contacts={vizibleContacts} deleteContact={deleteContact}></List>
        </Section>
      </PhonebookWrap>
    </div>
  );
}
