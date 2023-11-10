import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, hadleFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name </label>
      <input
        type="search"
        id="filter"
        name="filter"
        required
        onChange={hadleFilter}
        placeholder="Search"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};
/*           {
            filteredContacts.map(contact => (
              <li key={contact.id}>{`${contact.name} : ${contact.number}`}</li>
            ));
          } */
Filter.propTypes = {
  hadleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
