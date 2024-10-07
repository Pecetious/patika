import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
export const contactSelectors = contactAdaptor.getSelectors(
  (state) => state.contacts
);
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactAdaptor.getInitialState(),
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    deleteAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,
  },
});
export const {
  addContact,
  addContacts,
  deleteContact,
  deleteAllContacts,
  updateContact,
} = contactsSlice.actions;
export default contactsSlice.reducer;
