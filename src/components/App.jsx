import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  hadleFilter = event => {
    this.setState({ filter: event.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const id = nanoid();
    const newContact = { name, id, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    form.reset();
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Phonebook</h3>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label htmlFor="number">Number </label>
          <input
            type="text"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            id="number"
            name="number"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="namebtn">
            Add contact
          </button>
        </form>
        <label htmlFor="filter">Find contacts by name </label>
        <input
          type="search"
          id="filter"
          name="filter"
          required
          onChange={this.hadleFilter}
          placeholder="Search"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <h4>Contacts:</h4>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>{`${contact.name} : ${contact.number}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
