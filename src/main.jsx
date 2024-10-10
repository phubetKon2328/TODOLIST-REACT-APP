import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CardContextProvider from "./store/context_store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </StrictMode>
);
