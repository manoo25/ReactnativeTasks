import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./Slices/todos.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createStore = async () => {
  const stored = await AsyncStorage.getItem("TasksList");
  const todos = stored ? JSON.parse(stored) : [];

  return configureStore({
    reducer: {
      todos: todosSlice.reducer,
    },
    preloadedState: {
      todos: {
        list: todos
      }
    }
  });
};
