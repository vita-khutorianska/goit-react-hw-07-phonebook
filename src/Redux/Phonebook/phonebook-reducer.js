import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],

  [actions.deleteContact]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const filter = createReducer('', {
  [actions.filterChange]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
