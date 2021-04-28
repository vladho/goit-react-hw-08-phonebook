import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;
export const getAllContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilterContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
