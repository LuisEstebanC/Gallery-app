import React, { useState } from "react";

import "./App.css";
import {
  InputContext,
  SelectContext,
  handleDrawerContex,
  resultSearchContext,
} from "./contexts/NavOptionsContext";
import AppRouter from "./routes/AppRouter";

// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./GlobalTheme";
const App = () => {
  const [input, setInput] = useState("");
  const [perPage, setPerPage] = useState(20);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <resultSearchContext.Provider value={{ searchResult, setSearchResult }}>
        <InputContext.Provider value={{ input, setInput }}>
          <SelectContext.Provider value={{ perPage, setPerPage }}>
            <handleDrawerContex.Provider value={{ openDrawer, setOpenDrawer }}>
              <AppRouter />
            </handleDrawerContex.Provider>
          </SelectContext.Provider>
        </InputContext.Provider>
      </resultSearchContext.Provider>
    </ThemeProvider>
  );
};

export default App;
