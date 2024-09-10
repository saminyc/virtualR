import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="text-orange-400 inline-block px-3 py-2 border-2 border-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition-all duration-500"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((ele, idx) => (
                <li key={idx} className="py-4">
                  <a href={ele.href}>{ele.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 ">
              <a href="#" className="border rounded-md py-2 px-3">
                Sign In
              </a>
              <a
                href="#"
                className="text-orange-400 inline-block px-3 py-2 border-2 border-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition-all duration-500"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
