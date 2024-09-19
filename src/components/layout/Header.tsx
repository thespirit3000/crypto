//import { TonConnectButton } from "@tonconnect/ui-react";
import { Layout } from "antd";
import { Component } from "react";
const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  height: 64,
  backgroundColor: "#4096ff",
};

export default class Header extends Component {
  render() {
    return (
      <Layout.Header style={headerStyle}>
        <div></div>
      </Layout.Header>
    );
  }
}
