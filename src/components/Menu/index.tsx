import {
  FaUser,
  FaAngellist,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Contact", url: "/contact" },
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
            className="flex flex-col items-center text-gray-light hover:text-yellow transition-colors"
          >
            <div>{iconList[index].icon}</div>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
