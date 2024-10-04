import { useEffect } from "react";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
      window.Telegram.WebApp.expand();
      console.log(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return <AppLayout />; // j(
}

export default App;
