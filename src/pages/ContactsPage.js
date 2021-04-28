// import React from "react";
// import { connect } from "react-redux";
// import Contacts from "../components/Contacts/Contacts";
// import Filter from "../components/Filter/Filter";
// import Phonebook from "../components/Phonebook/Phonebook";
// import Section from "../components/Section/Section";
// import { addContact, getContacts } from "../redux/contacts/contactsOperation";

// const ContactsPage = ({ items }) => {
//   const submitForm = (data) => {
//     const isOriginal = items.find(
//       (item) => item.name.toLowerCase() === data.name.toLowerCase()
//     );
//     isOriginal
//       ? alert(`${data.name} is already in contacts`)
//       : addContact(data);
//   };
//   return (
//     <>
//       <Section title="Phonebook">
//         <Phonebook onSubmit={submitForm} />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <Contacts items={items} />
//       </Section>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addContact: (name) => dispatch(addContact(name)),
//     getContacts: (contacts) => dispatch(getContacts(contacts)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactsPage);

import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactsPage = () => {
  return <ContactForm />;
};

export default ContactsPage;
