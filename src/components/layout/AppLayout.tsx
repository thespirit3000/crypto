import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage.tsx";
import TasksPage from "../../pages/TasksPage";
import UserPage from "../../pages/UserPage";
const outletStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 2*64px)",
};
export default class AppLayout extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <Header />
        <div style={outletStyle}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}
