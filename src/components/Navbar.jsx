import { useState } from "react";
import logo from "../images/logo.svg";
import iconOpen from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6 px-4 lg:px-44">
      <nav className="hidden lg:flex justify-between items-center">
        <img src={logo} alt="This is the logo of the landing page called loopstudios" />
        <ul className="flex gap-12 items-center">
          <li>
            <a href="#" className="text-white text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Support
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile view */}
      <nav className="lg:hidden flex items-center justify-between relative">
        <div>
          <img src={logo} alt="logo of the website named snap" width={140} height={140} />
        </div>
        <div>
          <img
            className="cursor-pointer"
            src={isOpen ? iconClose : iconOpen}
            alt="This is the icon that opens the mobile navigation"
            width={isOpen ? 20 : 25}
            height={25}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col items-start px-6 justify-center">
            <div className="absolute top-6 left-6">
              <img src={logo} alt="This is the logo of the landing page" width={140} />
            </div>
            <div className="absolute top-6 right-6 cursor-pointer">
              <img src={iconClose} alt="Close navigation" width={25} onClick={toggleNavigation} />
            </div>
            <ul className="flex flex-col gap-6 items-start mt-20 uppercase text-2xl josefin-sans-300">
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white"> 
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
