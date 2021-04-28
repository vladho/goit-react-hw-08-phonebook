import React from "react"
import PropTypes from "prop-types"
import ContactsItem from "./ContactsItem/ContactsItem"
import { connect } from "react-redux"
import {
  deleteContact,
  editContact,
} from "../../redux/contacts/contactsOperation"
import { getFilterContacts } from "../../redux/contacts/contactsSelector"

const Contacts = ({ deleteContact, filterContacts, editContact }) => {
  return (
    <>
      <ul className="contacts__name">
        {filterContacts.map((el) => (
          <ContactsItem
            contact={el}
            key={el.id}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({
  filterContacts: getFilterContacts(state),
})

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
    editContact: (id) => dispatch(editContact(id)),
  }
}

Contacts.propTypes = {
  items: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
