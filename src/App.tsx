import React, { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Heading } from "./components/Heading";
import { Incrementer } from "./components/Incrementer";


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
