import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onRemove, toggleDone }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => <li key={item.id} className={item.done ? 'done' : 'todo'}>
          {item.content}
          <input
            className={'itemCreator-button'}
            type="button"
            value={'Remove task'}
            onClick={() => {
              onRemove(item.id)
            }}
          />
          <input
            className={'itemCreator-button'}
            type="button"
            value={item.done ? 'Mark as todo' : 'Mark as done'}
            onClick={() => {
              toggleDone(item.id)
            }}
          />
        </li>)}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeItem(id)),
  toggleDone: id => dispatch(actions.toggleDone(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
