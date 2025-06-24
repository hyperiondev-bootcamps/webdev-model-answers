import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";

// Creating a root element and rendering the App component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
