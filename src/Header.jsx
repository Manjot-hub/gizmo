import React, { Fragment, useState } from "react";
import { FaChevronDown, FaRocket, FaUserCircle } from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const servicesDropdown = [
  {
    name: "Automation and Efficiency",
    path: "/automation-efficiency",
  },
  {
    name: "Data Analysis and Insights",
    path: "/data-analysis-insights",
  },
  {
    name: "Content Generation and Creativity",
    path: "/generative-ai",
  },
  {
    name: "Personalized Experiences",
    path: "/personalized-experiences",
  },
  {
    name: "Enhanced Human-Computer Interaction",
    path: "/enhanced-hci",
  },
  {
    name: "Specialized Industry Applications",
    path: "/specialized-industry-apps",
  },
];

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Get userName and login state from localStorage
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const userName = localStorage.getItem('userName') || '';
  const initials = userName ? userName.substring(0, 2).toUpperCase() : '';

  return (
    <header className="bg-black flex justify-between items-center px-8 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaRocket className="text-gray-400 w-6 h-6" />
        <span className="text-2xl font-bold text-gray-400">Gizmo</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-gray-400">
        {/* Home dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center hover:text-[#D8B4FE] transition">
            Home
            <ChevronDownIcon
              className="ml-1 h-4 w-4 text-[#5A6F73] hover:text-[#D8B4FE]"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-48 origin-top-right rounded-md bg-[#1E1E1E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/home"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-[#2a2a2a] text-[#D8B4FE]"
                          : "text-[#5A6F73]"
                      }`}
                    >
                      HomePage (Public)
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/second-home"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-[#2a2a2a] text-[#D8B4FE]"
                          : "text-[#5A6F73]"
                      }`}
                    >
                      UserHome (Dashboard)
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <a href="#" className="hover:text-[#D8B4FE] transition">
          Products
        </a>
        {/* <div className="bg-red-500 dark:bg-blue-500 h-20 w-20"></div> */}

        {/* Services Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center items-center hover:text-[#D8B4FE] transition">
            Services
            <ChevronDownIcon
              className="ml-1 h-4 w-4 text-[#5A6F73] hover:text-[#D8B4FE]"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-56 origin-top-right rounded-md bg-[#1E1E1E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                {[
                  {
                    name: "Automation and Efficiency",
                    path: "/automation-efficiency",
                  },
                  {
                    name: "Data Analysis and Insights",
                    path: "/data-analysis-insights",
                  },
                  {
                    name: "Content Generation and Creativity",
                    path: "/generative-ai",
                  },
                  {
                    name: "Personalized Experiences",
                    path: "/personalized-experiences",
                  },
                  {
                    name: "Enhanced Human-Computer Interaction",
                    path: "/enhanced-hci",
                  },
                  {
                    name: "Specialized Industry Applications",
                    path: "/specialized-industry-apps",
                  },
                ].map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-sm ${
                          active
                            ? "bg-[#2a2a2a] text-[#D8B4FE]"
                            : "text-[#5A6F73]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link to="/contact" className="hover:text-[#D8B4FE]">
          Contact
        </Link>

        <Link to="/blog" className="hover:text-[#D8B4FE]">
          Blog
        </Link>

        <Link to="/about-us" className="hover:text-[#D8B4FE]">
          About Us
        </Link>

        {/* Profile Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center text-[#5A6F73] hover:text-[#D8B4FE]">
            {isLoggedIn && initials ? (
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D8B4FE] text-black font-bold text-lg">
                {initials}
              </span>
            ) : (
              <FaUserCircle size={24} />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-[#1E1E1E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-[#2a2a2a] text-[#D8B4FE]"
                          : "text-[#5A6F73]"
                      }`}
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/signup"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-[#2a2a2a] text-[#D8B4FE]"
                          : "text-[#5A6F73]"
                      }`}
                    >
                      Signup
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/forgot-password"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-[#2a2a2a] text-[#D8B4FE]"
                          : "text-[#5A6F73]"
                      }`}
                    >
                      Forgot Password
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <button
          onClick={() =>
            typeof setDarkMode === "function"
              ? setDarkMode((prev) => !prev)
              : null
          }
          className={
            darkMode
              ? "text-[#D8B4FE] hover:text-[#5A6F73] transition"
              : "text-[#FFD700] hover:text-gray-400 transition"
          }
        >
          {!darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#5A6F73] hover:text-[#D8B4FE]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1E1E1E] text-[#5A6F73] p-6 flex flex-col space-y-4 md:hidden z-50">
          <a href="#" className="hover:text-[#D8B4FE]">
            Home
          </a>
          <a href="#" className="hover:text-[#D8B4FE]">
            Products
          </a>
          <div>
            <p className="text-white font-semibold mb-2">Solutions</p>
            <ul className="space-y-2">
              {[
                "Cloud Integration",
                "Data Analytics",
                "AI Solutions",
                "Automation Tools",
                "Customer Support",
                "Security & Compliance",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="block hover:text-[#D8B4FE]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#" className="hover:text-[#D8B4FE]">
            Contact
          </a>
          <div className="border-t border-[#5A6F73] pt-4">
            <Link to="/login" className="block hover:text-[#D8B4FE]">
              Login
            </Link>
            <Link to="/signup" className="block hover:text-[#D8B4FE]">
              Signup
            </Link>
            <Link to="/forgot-password" className="block hover:text-[#D8B4FE]">
              Forgot Password
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

{
  /* <header className="bg-[#181818] w-full flex items-center justify-between px-8 py-3 shadow-md relative">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-[150px] w-[175px] object-contain" />
      </div>

      
      <nav className="hidden md:flex items-center gap-8">
        
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center text-white font-medium hover:text-yellow-400 transition">
            Home <FaChevronDown className="ml-1 text-xs" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/home"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-yellow-400 text-black"
                          : "text-white"
                      }`}
                    >
                      HomePage (Public)
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/second-home"
                      className={`block px-4 py-2 ${
                        active
                          ? "bg-yellow-400 text-black"
                          : "text-white"
                      }`}
                    >
                      UserHome (Dashboard)
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          to="/about-us"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          About Us
        </Link>

        
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center text-white font-medium hover:text-yellow-400 transition">
            Services <FaChevronDown className="ml-1 text-xs" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                {servicesDropdown.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-sm ${
                          active
                            ? "bg-yellow-400 text-black"
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          to="/blog"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          Blog
        </Link>
        <Link
          to="/contact-us"
          className="text-white font-medium hover:text-yellow-400 transition"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setDarkMode && setDarkMode((prev) => !prev)}
          className="text-white hover:text-yellow-400 transition"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      
      <button
        className="md:hidden text-white hover:text-yellow-400"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#232323] text-white p-6 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/home" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-yellow-400">
            About Us
          </Link>
          <div>
            <p className="text-yellow-400 font-semibold mb-2">Services</p>
            <ul className="space-y-2">
              {servicesDropdown.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/blog" className="hover:text-yellow-400">
            Blog
          </Link>
          <Link to="/contact-us" className="hover:text-yellow-400">
            Contact Us
          </Link>
          <button
            onClick={() => setDarkMode && setDarkMode((prev) => !prev)}
            className="text-white hover:text-yellow-400 transition"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      )}
    </header> */
}
