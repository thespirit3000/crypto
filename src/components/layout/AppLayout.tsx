import React, { Component } from "react";
import { Layout } from "antd";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 2*64px)",
  color: "#fff",
  backgroundColor: "#0958d9",
};

export default class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content style={contentStyle}>
          <Content />
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
