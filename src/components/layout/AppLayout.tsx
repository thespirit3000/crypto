import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const outletStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 2*64px)",
};
export default class AppLayout extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <Header />
        <div style={outletStyle}>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}
