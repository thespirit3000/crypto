import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

export default class AppLayout extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
