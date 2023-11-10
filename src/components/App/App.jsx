import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import {} from './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  hadleFilter = event => {
    this.setState({ filter: event.target.value });
  };
  handleDelete = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = this.state.name;
    const number = this.state.number;
    const id = nanoid();
    const newContact = { name, id, number };
    const isExist = this.state.contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));

    form.reset();
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <section className="contact-form">
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.name}
          number={this.number}
          id={this.id}
        />
        <h2 className="contact">Contacts</h2>
        <Filter hadleFilter={this.hadleFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          filterContacts={this.filteredContacts}
          onDelete={this.handleDelete}
        />
      </section>
    );
  }
}