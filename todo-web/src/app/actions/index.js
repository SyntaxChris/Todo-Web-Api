import { v4 } from 'node-uuid';
import axios from "axios";

export const fetchTodos = (dispatch) => {
  axios.get("http://localhost:3000/api/v1/todos")
    .then((res) => {
      dispatch({type: 'FETCH_TODOS_FULFILLED', todos: res.data.todos})
    })
    .catch((err) => {
      throw new Error(err);
    })
}

export const addTodo = (text, dispatch) => {
  axios.post("http://localhost:3000/api/v1/todos",{todo:{ text: text, completed: false }})
    .then((res) => {
      dispatch({
        type: 'ADD_TODO',
        id: res.data.todo.id,
        text
      })
    })
    .catch((err) => {
      throw new Error(err);
    })
};

export const deleteTodo = (id, dispatch) => {
  axios.delete(`http://localhost:3000/api/v1/todos/${id}`)
    .then((res) => {
      dispatch({ 
        type: 'DELETE_TODO',
        id
      })
    })
    .catch((err) => {
      throw new Error(err);
    })
};

export const toggleTodo = (id, status, dispatch) => {
  axios.put(`http://localhost:3000/api/v1/todos/${id}`,{todo:{ completed: !status }})
    .then((res) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    })
    .catch((err) => {
      throw new Error(err);
    })
}
export const setTodoFilter = (filter) => ({
  type: 'SET_TODO_FILTER',
  filter
});