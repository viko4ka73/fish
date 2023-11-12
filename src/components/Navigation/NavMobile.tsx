import { closeX, hamburger } from "../../assets/images";
import { useState } from "react";
import { navLinks } from "../../constants";

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
        <div className="fixed top-0 right-0 text-right bg-white-400 shadow-xl rounded-b-[30px] z-10">
          <div className="cursor-pointer absolute top-2 right-2" onClick={toggleMenu} >
            <img
              src={closeX}
              alt="x"
              width={40}
              height={40}
              onClick={toggleMenu}
              className="cursor-pointer max-sm:w-[25px] ml-5 "
            />
          </div>

          <ul className="flex justify-center flex-col items-end gap-6 p-20">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-xl font-bold text-dark-blue underline hover:text-light-blue duration-300" >
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
