import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {} from './ContactForm.css';

export const ContactForm = ({ handleSubmit, handleChange }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <div className="phonebook-form">
      <form onSubmit={handleSubmit}>
        <h1 className="phonebook-title">Phonebook</h1>
        <div>
          <label className="phonebook-name" htmlFor="name">
            Name{' '}
          </label>
          <input
            type="text"
            id={nameId}
            name="name"
            onChange={handleChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label className="phonebook-name" htmlFor="number">
            Number{' '}
          </label>
          <input
            type="text"
            id={numberId}
            name="number"
            onChange={handleChange}
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
  handleChange: PropTypes.func.isRequired,
};
