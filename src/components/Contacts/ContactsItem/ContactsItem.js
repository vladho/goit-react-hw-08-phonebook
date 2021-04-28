import React from "react"
import styles from "./ContactsItem.module.css"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

const ContactsItem = ({ contact, deleteContact }) => {
  const { name, number, id } = contact
  return (
    <li className={styles.name}>
      {name}: {number}
      <IconButton aria-label="delete" onClick={() => deleteContact(id)}>
        <DeleteIcon />
      </IconButton>
    </li>
  )
}

export default ContactsItem
