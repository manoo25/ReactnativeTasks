import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, data } = action.payload;
      const index = state.list.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...data };
      }
    },
    setTodos: (state, action) => {
      state.list = action.payload;
    },
  }
});

export const { addTodo, removeTodo, toggleComplete, updateTodo, setTodos } = todosSlice.actions;
export default todosSlice;
