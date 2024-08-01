import React from "react";





const Navbar: React.FC = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between sticky top-0 backdrop-blur-md">
      <h1 className="josefin-slab text-xl mx-6">Silicon</h1>
      <ul className="flex items-center">
        <li>
          <a
              href="/res/SiliconCV.png"
              download="SiliconCV.png" className="poppins-regular bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mx-6 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
