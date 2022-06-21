import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Heading } from "./components/Heading";
import { Incrementer } from "./components/Incrementer";
import { InputGroup } from "./components/InputGroup";
import { UL } from "./components/UnorderedList";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { selectTodos, addTodo, removeTodo } from "./store";
import { useTodos, useRemoveTodo, TodosProvider } from "./hooks/useTodos";

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  // those can be used while using the custom hook for todos
  // const addTodo = useAddTodo();
  // const removeTodo = useRemoveTodo();

  const [value, setValue] = useState(0);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Heading title="Introduction" />
      <Box>Hello There</Box>
      <Heading title="Todos" />
      <UL
        itemClick={(item) => alert(item.id)}
        items={todos}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </>
        )}
      />
      <InputGroup onButtonClicked={onAddTodo} textRef={newTodoRef} />
      <Incrementer value={value} setValue={setValue} />
    </div>
  );
}
const JustShowTodos = () => {
  const todos = useSelector(selectTodos);
  return (
    <UL
      itemClick={() => {}}
      items={todos}
      render={(todo) => <>{todo.text}</>}
    />
  );
};
// const AppWrapper = () => (
//   <TodosProvider
//     initialTodos={[
//       {
//         id: 0,
//         text: "Hey there useContext",
//         done: false
//       }
//     ]}
//   >
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "50% 50%"
//       }}
//     >
//       <App></App>
//       <JustShowTodos />
//     </div>
//   </TodosProvider>
// );

const AppGenralWrapper = () => (
  <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
    <Provider store={store}>
      <App />
      <JustShowTodos />
    </Provider>
  </div>
);
export default AppGenralWrapper;
