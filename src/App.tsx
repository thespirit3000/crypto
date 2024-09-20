import { useEffect } from "react";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestURL =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
      window.Telegram.WebApp.expand();
      console.log(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestURL}>
      <AppLayout />
    </TonConnectUIProvider>
  );
}

export default App;
