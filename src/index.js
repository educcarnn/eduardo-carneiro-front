import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CharacterProvider } from "./context/CharacterContext";

ReactDOM.render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
