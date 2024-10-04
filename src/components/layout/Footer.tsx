import { Layout } from "antd";
//import { TonConnectButton } from "@tonconnect/ui-react";
// import { Link } from "react-router-dom";
import Menu from "../Menu";

const footerStyle: React.CSSProperties = {
  height: 64,
  backgroundColor: "#293241",
  display: "flex",
};

const Footer = () => {
  return (
    <Layout.Footer style={footerStyle}>
      {" "}
      <Menu />
    </Layout.Footer>
  );
};

export default Footer;
