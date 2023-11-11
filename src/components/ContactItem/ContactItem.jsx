import React from 'react';
import propTypes from 'prop-types';
import {} from './ContactItem.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div className="contact-item">
      <span className="item">{name}: </span>
      <span className="item">{number}</span>
      <button className="deletebtn" type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
