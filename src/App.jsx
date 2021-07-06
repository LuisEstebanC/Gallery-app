import React, { useState } from "react";

import "./App.css";

import { InputContext } from "./contexts/InputContext";
import AppRouter from "./routes/AppRouter";
const App = () => {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <AppRouter />
    </InputContext.Provider>
  );
};

export default App;
