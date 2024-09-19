import { Component } from "react";
import { Layout } from "antd";
import { TonConnectButton } from "@tonconnect/ui-react";

const footerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  height: 64,
  backgroundColor: "#4096ff",
};
export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer style={footerStyle}>
        <div>
          <TonConnectButton />
        </div>
      </Layout.Footer>
    );
  }
}
