import React from 'react';
import propTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <span>{name}: </span>
      <span>{number}</span>
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
