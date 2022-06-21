//https://redux.js.org/tutorials/quick-start
//https://www.youtube.com/watch?v=eFh2Kr9hfyo&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&index=31
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: []
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // @ts-ignore
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false
        }
      ];
    },
    // @ts-ignore
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }: any) => id !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

//a type for the rootstate should be defined
type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
