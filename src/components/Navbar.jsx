import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // start as closed

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed flex justify-between items-center bg-[#f1f1f1] dark:bg-gray-900 z-50 w-full px-6 py-4 shadow-sm">
      {/* Brand */}
      <a href="/" className="font-bold text-2xl text-pink-500">
        SAMTECH
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-xl hover:text-pink-500 transition duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Hamburger Icon - Always visible on mobile */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden z-50 text-pink-500"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 dark:bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white hover:text-pink-500 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
