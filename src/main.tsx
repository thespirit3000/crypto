import { createRoot } from "react-dom/client";
import React from "react";
import { HashRouter } from "react-router-dom";
//import WebApp from "@twa-dev/sdk";
import App from "./App.tsx";
import "./index.css";

//WebApp.ready();
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
