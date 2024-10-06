import {
  FaUser,
  FaAngellist,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, title: "Main", url: "/" },
  { id: 2, title: "Tasks", url: "/tasks" },
  { id: 3, title: "User", url: "/user" },
  { id: 4, title: "Referals", url: "/referals" },
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaAngellist /> },
  { icon: <FaShoppingCart /> },
  { icon: <FaBars /> },
  { icon: <FaTimes /> },
];

const Menu = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <ul className="flex flex-wrap justify-around items-center h-full">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className="flex flex-col justify-center items-center text-gray-light hover:text-yellow transition-colors size-16 "
          >
            <div>{iconList[index].icon}</div>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
