import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = actions.addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should remove items from the list REMOVE_ITEM', () => {
    const state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
    const mockAction = actions.removeItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(2);
  });

  it('should toggle the value done by on the matching id item TOGGLE_DONE', () => {
    const state = {
      items: [
        { id: 1, content: 'first', done: false },
        { id: 2, content: 'second', done: false },
      ]
    }
    const mockAction = actions.toggleDone(1);
    let result = reducer(state, mockAction);
    expect(result.items[0].id).toEqual(1);
    expect(result.items[0].done).toBe(true);
  });

  it('should toggle the visibility filter value TOOGLE_VISIBILITY_FILTER', () => {
    const state = {
      showAll: true
    }
    const mockAction = actions.toggleVisibilityFilter();
    let result = reducer(state, mockAction);
    expect(result.showAll).toBe(false);
  });
});
