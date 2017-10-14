import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemCreator } from '../index';

const defaultProps = {
  showAll: true,
  onAdd: f => f,
  onToggleMainFilter: jest.fn(),
  items: [{ id: 1, content: 'Test 1', done: true }, { id: 2, content: 'Test 2', done: true }]
};

describe('ItemCreator', () => {
  it('renders without crashing', () => {
    shallow(<ItemCreator {...defaultProps} />);
  });

  it('should call onAdd with the input content', () => {
    const onAddMock = jest.fn();
    const renderedItem = mount(
      <ItemCreator {...defaultProps} onAdd={onAddMock} />
    );
    renderedItem.find('.itemCreator-input').node.value = 'New Test Item';
    renderedItem.find('.itemCreator-button').simulate('click');
    expect(onAddMock.mock.calls.length).toBe(1);
    expect(onAddMock.mock.calls[0][0]).toBe('New Test Item');
  });

  it('should clear the input onAdd', () => {
    const renderedItem = mount(<ItemCreator {...defaultProps} />);
    renderedItem.find('.itemCreator-input').node.value = 'New Test Item';
    renderedItem.find('.itemCreator-button').simulate('click');
    expect(renderedItem.find('.itemCreator-input').node.value).toEqual('');
  });

  it('should render a button for toggling the visibility filter with the right state when state showall is true', () => {
    const renderedItem = mount(<ItemCreator {...defaultProps} />);
    const toggle = renderedItem.find('[value="Show pending tasks only"]');
    expect(toggle).toHaveLength(1);
  });

  it('should render a button for toggling the visibility filter with the right state when state showall is false', () => {
    const renderedItem = mount(<ItemCreator {...defaultProps} showAll={false}/>);
    const toggle = renderedItem.find('[value="Show all"]');
    expect(toggle).toHaveLength(1);
  });

  it('should tigger onToggleMainFilter when the filter button is clicked', () => {
    const renderedItem = mount(<ItemCreator {...defaultProps} />);
    expect(renderedItem.props().onToggleMainFilter.mock.calls.length).toBe(0);
    renderedItem.find('[value="Show pending tasks only"]').simulate('click');
    expect(renderedItem.props().onToggleMainFilter.mock.calls.length).toBe(1);
  });
});
