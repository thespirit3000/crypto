import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "../../../pages/MainPage.tsx";
import TasksPage from "../../../pages/TasksPage";
import UserPage from "../../../pages/UserPage";

const contentStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 2*64px)",
};

const Content = () => {
  return (
    <div style={contentStyle} className="bg-gray-light">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Content;
