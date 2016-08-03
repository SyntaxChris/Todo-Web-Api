import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const TodoInput = ({ dispatch }) => {
  let input;
  
  const onAddTodoClick = (e) => {
    e.preventDefault();
    if(!input.value.trim()){
      return;
    }
    
    addTodo(input.value, dispatch);
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={(e) => onAddTodoClick(e)}>
        <input ref={node => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};


TodoInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TodoInput);