import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import WorkoutContextProvider from "./context/WorkoutContext";

const Root = () => {
  return (
    <WorkoutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
