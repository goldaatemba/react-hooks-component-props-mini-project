import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";          // ✅ Make sure this path is correct
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />                       // ✅ App is used here, must be imported above
  </React.StrictMode>
);
