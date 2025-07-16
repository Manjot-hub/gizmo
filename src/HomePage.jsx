import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaRocket,
  FaUserCircle,
} from "react-icons/fa";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function HomePage({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {
        // className="bg-white text-black dark:bg-[#121212] dark:text-white min-h-screen"
        <div className="bg-white text-black dark:bg-[#121212] dark:text-white min-h-screen">
          {/* Navbar */}
          <header className="flex justify-between items-center px-8 py-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <FaRocket className="text-[#D8B4FE] w-6 h-6" />
              <span className="text-2xl font-bold text-[#D8B4FE]">Gizmo</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-[#5A6F73]">
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
                        { name: "Data Analysis and Insights", path: "/data-analysis-insights" },
                        { name: "AI Solutions", path: "/ai-solutions" },
                        { name: "Personalized Experiences", path: "/personalized-experiences" },
                        { name: "Enhanced Human-Computer Interaction", path: "/enhanced-hci" },
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

              <a href="#" className="hover:text-[#D8B4FE] transition">
                Contact
              </a>

              <Link to="/blog" className="hover:text-[#D8B4FE]">
                Blog
              </Link>

              <Link to="/about-us" className="hover:text-[#D8B4FE]">
                About Us
              </Link>

              {/* Profile Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-[#5A6F73] hover:text-[#D8B4FE]">
                  <FaUserCircle size={24} />
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
                onClick={() => setDarkMode(!darkMode)}
                className="text-[#5A6F73] hover:text-[#D8B4FE] transition"
              >
                {darkMode ? (
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
                  <Link
                    to="/forgot-password"
                    className="block hover:text-[#D8B4FE]"
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center px-4 py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Welcome to <span className="text-[#D8B4FE]">Gizmo</span>
            </h1>
            <p className="max-w-xl text-[#5A6F73] mb-10">
              We help you transform your business with innovative solutions.
              Let’s build the future together.
            </p>
            <div className="space-x-4">
              <button className="bg-[#D8B4FE] text-[#121212] font-semibold px-6 py-3 rounded hover:bg-[#b08ed1] transition">
                Get Started
              </button>
              <button className="border border-[#D8B4FE] text-[#D8B4FE] px-6 py-3 rounded hover:bg-[#D8B4FE] hover:text-[#121212] transition">
                Learn More
              </button>
            </div>
          </section>

          {/* Features / Highlights */}
          <section className="grid md:grid-cols-3 gap-8 px-8 py-16">
            {[
              {
                title: "Boost Productivity",
                desc: "Streamline your operations and empower your teams.",
              },
              {
                title: "Scale Seamlessly",
                desc: "Flexible solutions to grow as your business evolves.",
              },
              {
                title: "Insights & Analytics",
                desc: "Data-driven insights to help you make smarter decisions.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] p-6 rounded shadow hover:bg-[#2a2a2a] transition"
              >
                <h3 className="text-xl font-bold text-[#D8B4FE] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#5A6F73]">{feature.desc}</p>
              </div>
            ))}
          </section>

          {/* Footer */}
          <footer className="bg-[#121212] border-t border-[#5A6F73] pt-12 pb-8 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm text-[#5A6F73]">
              {/* Column 1: Brand + Social Icons */}
              <div>
                <h2 className="text-white text-xl font-bold mb-4">MyBrand</h2>
                <p className="mb-4">
                  Your trusted partner in digital transformation. We build the
                  future, together.
                </p>

                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="text-[#5A6F73] hover:text-[#D8B4FE] transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#5A6F73] hover:text-[#D8B4FE] transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#5A6F73] hover:text-[#D8B4FE] transition-colors"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#5A6F73] hover:text-[#D8B4FE] transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              {/* Column 2: Products */}
              <div>
                <h3 className="text-white font-semibold mb-3">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      CRM Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Automation
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Company */}
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Support */}
              <div>
                <h3 className="text-white font-semibold mb-3">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#D8B4FE] transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center text-[#5A6F73] text-xs">
              &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
          </footer>
        </div>
      }
    </div>
  );
}
