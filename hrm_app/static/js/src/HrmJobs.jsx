import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    reportWebVitals();
  } else {
    console.error("React target container not found");
  }
});
