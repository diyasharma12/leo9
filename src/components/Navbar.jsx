// src/components/Navbar.jsx
import { useState } from "react";
import logo from "../assets/logo-light.svg";
import ServicePopup from "./servicePopup";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 border-b z-50 bg-white"> {/* Added relative and z-50, bg-white for nav */}
      {/* Logo */}
      <img src={logo} alt="Leo9" className="h-10" />

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium">
        <li>Work</li>

        {/* Services hover */}
        <li
          onMouseEnter={() => setHovered("services")}
          onMouseLeave={() => setHovered(null)}
          className="relative cursor-pointer"
        >
          Services
        </li>

        <li>Clients</li>

        {/* About hover */}
        <li
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
          className="relative cursor-pointer"
        >
          About
        </li>

        <li>Knowledge</li>
      </ul>

      {/* Button */}
      <button className="bg-black text-white px-6 py-2 rounded-md">
        Contact
      </button>

      {/* Render the ServicePopup here, outside the nav links, 
          but still within the nav for easy Z-indexing if needed. */}
      {hovered === "services" && <ServicePopup isServices={true} />}
      {hovered === "about" && <ServicePopup isServices={false} />}
    </nav>
  );
};

export default Navbar;