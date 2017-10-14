import * as actions from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', done: false },
    { id: 2, content: 'Buy cat food', done: false },
    { id: 3, content: 'Water the plants', done: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        done: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case actions.REMOVE_ITEM:
      const newItems = state.items.filter(i=>i.id !== action.content);
      return {
        ...state,
        items: newItems,
      };
    case actions.TOGGLE_DONE:
      return {
        ...state,
        items: state.items.map(todo => todo.id === action.content ? {...todo, done: !todo.done} : todo)
      }

    default:
      return state;
  }
};

export default reducer;
