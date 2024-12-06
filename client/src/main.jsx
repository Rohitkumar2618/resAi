import React from "react";
import ReactDOM from "react-dom/client";
import "@progress/kendo-theme-default/dist/all.css";

import "./index.css";
import { Provider } from "react-redux";
import store from "./components/Redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Workspace from "./components/Workspace.jsx";
import Map from "./components/Map.jsx";
// import MapMain from "./components/MapMain.jsx";
import GuidePage from "./components/GuidePage.jsx";
import DataSource from "./components/DataSource.jsx";
import ResSuiteDashboard from "./components/ResSuiteDashboard.jsx";
import ResScoreDashboard from "./components/ResScoreDashboard.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login title="RAI | Login" /> },
  { path: "/signup", element: <SignUp title="RAI | Sign Up" /> },
  { path: "/home", element: <Home title="RAI | Home" /> },
  { path: "/forgetpassword", element: <ForgetPassword title="RAI | Forgot Password" /> },
  { path: "/dashboard", element: <Dashboard title="RAI | Home" /> },
  { path: "/workspace", element: <Workspace title="RAI | Home" /> },
  { path: "/resilience360", element: <Map title="RAI | Resilience 360" /> },
  { path: "/map/datasource", element: <DataSource title="RAI | Dummy" /> },
  { path: "/res-solv", element: <GuidePage title="RAI | ReSolve" /> },
  { path: "/res-suite", element: <ResSuiteDashboard title="RAI | ReSuite" /> },
  { path: "/res-score", element: <ResScoreDashboard title="RAI | ReScore" /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
