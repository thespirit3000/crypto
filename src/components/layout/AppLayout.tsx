import React, { Component } from "react";
import { Menu, Layout } from "antd";
import Content from "./Content";
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 64px)",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const items = new Array(4).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header style={headerStyle}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Layout.Header>
        <Layout.Content style={contentStyle}>
          <Content />
        </Layout.Content>
      </Layout>
    );
  }
}
