import React, { useState } from "react";

import "./App.css";

import { InputContext, SelectContext } from "./contexts/NavOptionsContext";
import AppRouter from "./routes/AppRouter";
const App = () => {
  const [input, setInput] = useState("");
  const [perPage, setPerPage] = useState(120);
  return (
    <InputContext.Provider value={{ input, setInput }}>
      <SelectContext.Provider value={{ perPage, setPerPage }}>
        <AppRouter />
      </SelectContext.Provider>
    </InputContext.Provider>
  );
};

export default App;
