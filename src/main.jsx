import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/vars.css";
import "./styles/reset.css";
import "./styles/index.scss";
import "./styles/media-queries.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
