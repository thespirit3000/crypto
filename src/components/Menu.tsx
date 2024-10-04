import PropTypes from "prop-types";

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Company" },
  { id: 3, text: "About" },
];

const Menu = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between mx-auto">
        <ul className="">
          {navItems.map((item) => (
            <li key={item.id} className="">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
