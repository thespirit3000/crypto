import { createRoot } from "react-dom/client";
//import WebApp from "@twa-dev/sdk";
import App from "./App.tsx";
import "./index.css";

//WebApp.ready();
createRoot(document.getElementById("root")!).render(<App />);
