import React, { PropTypes } from 'react';

const Todo = ({ 
  completed, 
  text, 
  id,
  onToggleClick,
  onDeleteClick
}) => (
  <li>
    <span onClick={() => onToggleClick(id, completed) }>{ JSON.stringify(completed) }</span>{' || '}
    <span>{text}</span>{' || '}
    <span onClick={() => onDeleteClick(id)}>x</span>
  </li>
);

Todo.PropTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // onToggleClick: onToggleClick.func.isRequired,
  // onDeleteClick: onDeleteClick.func.isRequired
}

export default Todo;