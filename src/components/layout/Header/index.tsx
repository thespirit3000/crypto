//import { TonConnectButton } from "@tonconnect/ui-react";
import { Component } from "react";

const headerClass =
  "bg-gray-dark min-h-[64px] text-gray-light flex justify-center content-center items-center";

export default class Header extends Component {
  render() {
    return (
      <div className={headerClass}>
        <h1>Diver</h1>
      </div>
    );
  }
}
