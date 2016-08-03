const todosFilter = (state='all', action) => {
  switch (action.type) {
    case 'SET_TODO_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default todosFilter;