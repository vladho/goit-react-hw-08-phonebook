import React, { useEffect } from "react";
import { connect } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Phonebook from "../Phonebook/Phonebook";
import Section from "../Section/Section";
import {
  addContact,
  getContacts,
} from "../../redux/contacts/contactsOperation";
import {
  getAllContacts,
  getLoading,
} from "../../redux/contacts/contactsSelector";

const ContactForm = ({ items, addContact, getContacts }) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const submitForm = (data) => {
    const isOriginal = items.find(
      (item) => item.name.toLowerCase() === data.name.toLowerCase()
    );
    isOriginal
      ? alert(`${data.name} is already in contacts`)
      : addContact(data);
  };
  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={submitForm} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts items={items} />
      </Section>
    </>
  );
};

const mapStateToProps = (contacts) => {
  return {
    loading: getLoading(contacts),
    items: getAllContacts(contacts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (name) => dispatch(addContact(name)),
    getContacts: (contacts) => dispatch(getContacts(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
