import { useEffect } from "react";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import TasksPage from "./pages/TasksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
      window.Telegram.WebApp.expand();
      console.log(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); //
}

export default App;
