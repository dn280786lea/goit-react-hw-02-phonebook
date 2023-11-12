import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.props.handleSubmit({ name, number });
    this.setState({ name: '', number: '' });
    form.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="phonebook-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="phonebook-title">Phonebook</h1>
          <div>
            <label className="phonebook-name" htmlFor="name">
              Name{' '}
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label className="phonebook-name" htmlFor="number">
              Number{' '}
            </label>
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />

            <button type="submit" className="namebtn">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
