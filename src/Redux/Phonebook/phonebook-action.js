import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number: number,
//     id: shortid.generate(),
//   },
// });
// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });
// const filterChange = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: { id: shortid.generate(), name, number },
}));
export const filterChange = createAction('contacts/filter');
export const deleteContact = createAction('contacts/delete');
// eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, filterChange, deleteContact };
