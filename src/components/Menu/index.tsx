const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Company" },
  { id: 3, text: "About" },
  { id: 4, text: "Dash" },
];

const Menu = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <ul className="flex flex-wrap justify-around items-center h-full">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-gray-light hover:text-yellow transition-colors"
          >
            <a href="#">{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
