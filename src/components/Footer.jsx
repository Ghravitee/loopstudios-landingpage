import logo from "../images/logo.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="px-6 py-12 lg:max-w-[75rem] mx-auto p-6 flex flex-col justify-center items-center gap-6 lg:grid grid-cols-3 grid-rows-2 ">
          <img
            src={logo}
            alt="This is the logo of the landing page called loopstudios"
            className="col-start-1 col-end-2"
          />
          <ul className="flex flex-col lg:flex-row gap-6 items-center text-xl font-bold alata-regular col-start-1 col-end-2 row-start-2 row-end-3">
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
          <ul className="flex gap-8 items-center col-start-3 col-end-4">
            <li className="hover-in">
              <img
                src={iconFacebook}
                alt="This is an icon of facebook"
                className="hover:cursor-pointer mb-1"
              />
            </li>
            <li className="hover-in">
              <img src={iconTwitter} alt="This is an icon of twitter" 
               className="hover:cursor-pointer mb-1"
              />
            </li>
            <li className="hover-in">
              <img src={iconPinterest} alt="This is an icon of pinterest" 
               className="hover:cursor-pointer mb-1"
              />
            </li>
            <li className="hover-in">
              <img src={iconInstagram} alt="This is an icon of instagram" 
               className="hover:cursor-pointer mb-1"
              />
            </li>
          </ul>
          <p className="text-white alata-regular col-start-3 col-end-4 row-start-2 row-end-3">&#169; {new Date().getFullYear()} Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
