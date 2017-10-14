import * as actions from './constants';

export const addItem = content => {
  return { type: actions.ADD_ITEM, content };
};

export const removeItem = content => {
  return { type: actions.REMOVE_ITEM, content };
};

export const toggleDone = content => {
  return { type: actions.TOGGLE_DONE, content };
};
