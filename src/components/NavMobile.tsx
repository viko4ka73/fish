import { hamburger } from "../assets/images";
import { useState } from "react";
import { navLinks } from "../constants";

const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative hidden max-[1400px]:block  ">
      <img
        src={hamburger}
        alt="hamburger icon"
        width={50}
        height={50}
        onClick={toggleMenu}
        className="cursor-pointer max-sm:w-[25px] ml-5"
      />

      {isMenuOpen && (
       <div className="fixed top-0 right-0 h-3/4 w-2/3 max-w-sm bg-extradark-blue rounded-b-md z-10">
          <div className="cursor-pointer text-lg text-white absolute top-2 right-2" onClick={toggleMenu}>
            Х
          </div>
          <ul className="flex flex-col justify-center  items-end gap-6 p-20">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-xl font-bold text-white hover:text-extra-light-blue duration-300 hover:text-light-blue" >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
