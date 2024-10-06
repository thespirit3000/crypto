import { createRoot } from "react-dom/client";
import React from "react";
//import WebApp from "@twa-dev/sdk";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TasksPage from "./pages/TasksPage";
import UserPage from "./pages/UserPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/user" element={<UserPage />} />
    </Route>
  )
);
//WebApp.ready();
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
