import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import Todo from './Todo';
import { deleteTodo } from '../../actions';
import { toggleTodo } from '../../actions';
import { fetchTodos } from '../../actions';

class TodosList extends React.Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render(){
    const { 
      todos,
      fetchTodos,
      todosFilter, 
      onToggleClick,
      onDeleteClick,
    } = this.props;

    const visibleTodos = (todos, f) => {
      switch(f){
        case 'all':
          return todos;
        case 'active':
          return todos.filter(t => !t.completed)
        case 'completed':
          return todos.filter(t => t.completed)
        default:
          throw new Error(`Unknown filter: ${f}`)
      }
    }

    const mapOfTodos = visibleTodos(
      todos, 
      todosFilter
    ).map((todo, index) => {
      return(
        <Todo
          key={todo.id} 
          {...todo}
          onToggleClick={onToggleClick}
          onDeleteClick={onDeleteClick}
          onClick={onToggleClick}
        />
      );
    });

    return(
      <div className="todos-list">
        <ul>
          { mapOfTodos }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  todosFilter: state.todosFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleClick(id, status){
    dispatch(toggleTodo(...arguments, dispatch));
  },
  onDeleteClick(id){
    deleteTodo(...arguments, dispatch);
  },
  fetchTodos(){
    fetchTodos(dispatch);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);

