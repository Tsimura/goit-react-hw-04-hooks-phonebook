import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shortid from 'shortid';
import { Form } from './ContactForm.styled';
class ContactForm extends Component {
  state = { name: '', number: '' };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
ContactForm.protoTypes = { onSubmit: PropTypes.func.isRequired };
export default ContactForm;
