import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const { data } = await axios.get("http://localhost:7000/todos");
    return data;
  }
);
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (body) => {
    const { data } = await axios.post("http://localhost:7000/todos", body);
    return data;
  }
);
export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, body }) => {
    const { data } = await axios.patch(
      `http://localhost:7000/todos/${id}`,
      body
    );
    return data;
  }
);
export const destroyTodoAsync = createAsyncThunk(
  "todos/destroyTodoAsync",
  async (id) => {
    await axios.delete(`http://localhost:7000/todos/${id}`);
    return id;
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    addTodoIsLoading: false,
    addTodoError: null,
    toggleTodoIsLoading: false,
    toggleTodoError: null,
    activeFilter: "all",
  },
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      //get todos
      .addCase(getTodosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //add todo
      .addCase(addTodoAsync.pending, (state) => {
        state.addTodoIsLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addTodoIsLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addTodoIsLoading = false;
        state.addTodoError = action.error.message;
      })
      //toggle todo
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const { id, completed } = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        state.items[index].completed = completed;
        state.toggleTodoIsLoading = false;
      })
      //destroy todo
      .addCase(destroyTodoAsync.fulfilled, (state, action) => {
        const id = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        state.items.splice(index, 1);
      });
  },
});
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
