import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper, WorkingSpace } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <AppWrapper>
        <WorkingSpace>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <h3>Your Phonebook is empty!</h3>
          )}
        </WorkingSpace>
      </AppWrapper>
    );
  }
}
export default App;
