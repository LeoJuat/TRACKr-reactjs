import React, { useContext } from "react";
import Main from "./components/Main/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import BetterSignUp from "./pages/BetterSignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthContext from "./store/auth-context";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";

const publicRoutes = [
  { path: "/", element: <Main /> },
  { path: "/sign-up", element: <BetterSignUp /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> },
];

const privateRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/workouts", element: <Workouts /> },
  { path: "/nutrition", element: <Nutrition /> },
  { path: "*", element: <Navigate to="/home" /> },
];

const mapRoutes = (routes) => {
  return routes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <React.Fragment>
      <Routes>
        {!isLoggedIn ? mapRoutes(publicRoutes) : mapRoutes(privateRoutes)}
      </Routes>
    </React.Fragment>
  );
}

export default App;
