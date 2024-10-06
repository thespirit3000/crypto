import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const outletStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 2*64px)",
};

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
      window.Telegram.WebApp.expand();
      console.log(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <div style={outletStyle}>
        <Outlet />
      </div>
      <Footer />
    </div>
  ); //
}

export default App;
