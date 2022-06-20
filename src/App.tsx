import React, { useState } from "react";
import "./App.css";

const Heading = (props: { title: string }) => <h2>{props.title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold"
    }}
  >
    {children}
  </div>
);

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...rest }) => (
  <button
    {...rest}
    style={{
      backgroundColor: "red",
      color: "white",
      fontSize: "large"
    }}
  >
    {children}
  </button>
);
const Incrementer: React.FunctionComponent<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)}>Add - {value}</Button>
);

// //Cutom hook
// const useNumber = (initialValue: number) => useState<number>(initialValue);
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Heading title="Introduction" />
      <Box>Hello There</Box>
      <Incrementer value={value} setValue={setValue} />
    </div>
  );
}

export default App;
