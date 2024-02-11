import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/HomePage/Dashboard/Dashboard";
import Doctor from "./Pages/HomePage/Doctors/Doctor";
const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/auth", element: <Auth /> },
  { path: "/doctor", element: <Doctor /> },
];

const App = () => {
  const element = useRoutes(routes);
  return element;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
