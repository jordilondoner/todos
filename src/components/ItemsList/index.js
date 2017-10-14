import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, onRemove }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => <li key={item.id}>
          {item.content}
          <input
            className={'itemCreator-button'}
            type="button"
            value={'Remove task'}
            onClick={() => {
              onRemove(item.id)
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
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
