import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { ExerciseContextProvider } from "./store/exercise-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ExerciseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExerciseContextProvider>
  </AuthContextProvider>
);
