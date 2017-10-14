import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../logic/actions';
import './styles.css';

export const ItemCreator = ({ onAdd, onToggleMainFilter, showAll, items }) => {
  let inputField;

  return (
    <div className={'itemCreator'}>
      <input
        ref={input => {
          inputField = input;
        }}
        className={'itemCreator-input'}
        type="text"
        placeholder={'What do you need to do?'}
      />
      <input
        className={'itemCreator-button'}
        type="button"
        value={'Add Task'}
        onClick={() => {
          inputField.value && onAdd(inputField.value);
          inputField.value = '';
        }}
      />
      <input
        className={'toggleFilter-button'}
        type="button"
        value={showAll ? 'Show not completed only' : 'Show all'}
        disabled={!items.filter(i=>i.done).length}
        onClick={() => {
          onToggleMainFilter()
        }}
      />
    </div>
  );
};

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onToggleMainFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items, showAll: state.todos.showAll };
};

const mapDispatchToProps = dispatch => ({
  onAdd: newItem => dispatch(actions.addItem(newItem)),
  onToggleMainFilter: () => dispatch((actions.toggleVisibilityFilter()))

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
