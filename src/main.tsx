import React from "react";
import ReactDOM from "react-dom/client"; // Ensure correct import for React 18
import App from "./App";
import "./index.css";

// Ensure that root is correctly selected and React.StrictMode is being used properly
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
