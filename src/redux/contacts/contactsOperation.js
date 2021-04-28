import axios from "axios"
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from "./contactsActions"

export const addContact = ({ name, number }) => async (dispatch) => {
  const contacts = {
    name,
    number,
  }

  dispatch(addContactRequest())
  try {
    const { data } = await axios.post("/contacts", contacts)

    dispatch(addContactSuccess(data))
  } catch (error) {
    dispatch(addContactError(error))
  }
}

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest())
  try {
    const { data } = await axios.get("/contacts")
    dispatch(getContactsSuccess(data))
  } catch (error) {
    dispatch(getContactsError(error))
  }
}

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest())
  try {
    await axios.delete(`/contacts/${id}`)
    dispatch(deleteContactSuccess(id))
  } catch (error) {
    dispatch(deleteContactError(error))
  }
}

export const editContact = ({ id, name, number }) => async (dispatch) => {
  const contacts = {
    name,
    number,
  }
  console.log(contacts)
  dispatch(editContactRequest())
  try {
    await axios.patch(`/contacts/${id}`, contacts)
    dispatch(editContactSuccess({ id, name, number }))
  } catch (error) {
    // console.log(error)
    dispatch(editContactError(error))
  }
}
