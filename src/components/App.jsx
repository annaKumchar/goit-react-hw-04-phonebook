import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhonebookWrap } from './Section/Section.styled';
import { List } from './List/List';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addListItem = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    if (this.state.contacts.some(e => e.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVizibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  render() {
    const vizibleContacts = this.getVizibleContacts();

    return (
      <div>
        <PhonebookWrap>
          <Section title="Phonebook">
            <Form onSubmit={this.addListItem}></Form>
          </Section>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <List
              contacts={vizibleContacts}
              deleteContact={this.deleteContact}
            ></List>
          </Section>
        </PhonebookWrap>
      </div>
    );
  }
}
