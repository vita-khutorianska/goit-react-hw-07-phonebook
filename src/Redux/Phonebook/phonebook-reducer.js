import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],

  [actions.deleteContact]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});
const error = createReducer(null, {});
const filter = createReducer('', {
  [actions.filterChange]: (state, { payload }) => payload,
});
const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsFailure]: () => false,
  [addContactsRequest]: () => true,
  [addSuccess]: () => false,
  [addFailure]: () => false,
  [filterChange]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteChangeSuccess]: () => false,
  [deleteChangeFailure]: () => false,
});

export default combineReducers({
  items,
  filter,
});
