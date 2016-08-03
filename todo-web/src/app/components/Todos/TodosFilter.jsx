import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTodoFilter } from '../../actions';

const FilterLink = ({ filterTodos, currentFilter, children }) => {
  let linkName = children.toLowerCase(),
      active   = (currentFilter === linkName);

  return(
    <a 
      onClick={e => filterTodos(linkName)}
      className={active ? 'active' : ' '}>
      {children}
    </a>
  )
};

FilterLink.propTypes = {
  filterTodos: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const TodosFilter = ({ currentTodosFilter, filterTodos }) => (
  <div>
    <FilterLink 
      filterTodos={filterTodos} 
      currentFilter={currentTodosFilter}>All</FilterLink>{' | '}
    <FilterLink 
      filterTodos={filterTodos} 
      currentFilter={currentTodosFilter}>Active</FilterLink>{' | '}
    <FilterLink 
      filterTodos={filterTodos} 
      currentFilter={currentTodosFilter}>Completed</FilterLink>
  </div>
);

TodosFilter.propTypes = {
  currentTodosFilter: PropTypes.string.isRequired,
  filterTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentTodosFilter: state.todosFilter
});

const mapDispatchToProps = (dispatch) => ({
  filterTodos(filter) {
    dispatch(setTodoFilter(filter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosFilter);
