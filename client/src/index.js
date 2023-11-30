import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthentificationProvider from "./providers/AuthentificationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthentificationProvider>
      <App />
    </AuthentificationProvider>
  </React.StrictMode>
);
