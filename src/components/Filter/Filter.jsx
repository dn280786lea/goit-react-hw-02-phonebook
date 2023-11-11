import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <label className="filter-contact" htmlFor="filter">
        Find contacts by name{' '}
      </label>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
