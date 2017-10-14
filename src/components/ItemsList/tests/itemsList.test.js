import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  onRemove: f => f,
  toggleDone: f => f
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1', done: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1', done: true }, { id: 2, content: 'Test 2', done: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should render a button on every todo list item with the value "Remove task"', () => {
    const items = [{ id: 1, content: 'Test 1', done: true }, { id: 2, content: 'Test 2', done: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    const listItem = renderedItem.find('li').find('[value="Remove task"]');
    expect(listItem).toHaveLength(2);
  });

  it('should render a button on every todo list item with the value "Mark as done"', () => {
    const items = [{ id: 1, content: 'Test 1', done: false }, { id: 2, content: 'Test 2', done: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    const listItem = renderedItem.find('li').find('[value="Mark as done"]');
    expect(listItem).toHaveLength(2);
  });

  it('should render a button on every todo list item with  the value done as true with the value "Mark as todo"', () => {
    const items = [{ id: 1, content: 'Test 1', done: true }, { id: 2, content: 'Test 2', done: true }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    const listItemTodo = renderedItem.find('li').find('[value="Mark as done"]');
    const listItemDone = renderedItem.find('li').find('[value="Mark as todo"]');
    expect(listItemTodo).toHaveLength(0);
    expect(listItemDone).toHaveLength(2);
  });

});
