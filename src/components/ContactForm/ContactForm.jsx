import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactForm.css';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const onSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, id: nanoid(), number };
    handleSubmit(newContact);

    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <div className="phonebook-form">
      <form onSubmit={onSubmit}>
        <h1 className="phonebook-title">Phonebook</h1>
        <div>
          <label className="phonebook-name" htmlFor="name">
            Name{' '}
          </label>
          <input
            type="text"
            id={nameId}
            value={name}
            onChange={handleNameChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label className="phonebook-name" htmlFor="number">
            Number{' '}
          </label>
          <input
            type="text"
            id={numberId}
            value={number}
            onChange={handleNumberChange}
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />

          <button type="submit" className="namebtn">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
