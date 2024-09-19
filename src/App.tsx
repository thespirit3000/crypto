import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestURL =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestURL}>
      <AppLayout />
    </TonConnectUIProvider>
  );
}

export default App;
