import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StarWarsProvider } from "./context/StarWarsContext";

ReactDOM.render(
  <React.StrictMode>
    <StarWarsProvider>
      <App />
    </StarWarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
