import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthentificationProvider from "./providers/AuthentificationProvider";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthentificationProvider>
      <App />
    </AuthentificationProvider>
  </React.StrictMode>
);
