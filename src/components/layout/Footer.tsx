import { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
//import { TonConnectButton } from "@tonconnect/ui-react";
// import { Link } from "react-router-dom";

const footerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  height: 64,
  backgroundColor: "#4096ff",
};
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { label: "Nav one", key: "oner" },
  { label: "Nav Two", key: "twore" },
];

const Footer = () => {
  const [current, setCurrent] = useState("oner");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout.Footer style={footerStyle}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Layout.Footer>
  );
};

export default Footer;
