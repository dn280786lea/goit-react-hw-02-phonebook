import React, { Component } from 'react';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  handleSubmit = ({ name, number }) => {
    const isExist = this.state.contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <section className="contact-form">
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className="contact">Contacts</h2>
        <Filter handleFilter={this.handleFilter} filter={filter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </section>
    );
  }
}
