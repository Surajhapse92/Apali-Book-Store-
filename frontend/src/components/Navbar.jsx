import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiX } from "react-icons/hi";

import logo from "../assets/Logo/booklogo.png"; // Your logo image
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const userNavigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center md:gap-16 gap-4">
            {/* Hamburger Icon for Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMiniBars3CenterLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-xl font-bold hidden sm:block">
                Apali Book Store
              </span>
            </Link>

            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
{/* Search Input */}
<div className="relative sm:w-72 w-40">
              <IoSearchOutline className="absolute left-3 top-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 pl-10 pr-4 rounded-md focus:outline-none"
              />
            </div>

          {/* Right Side */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt="Avatar"
                      className={`w-8 h-8 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/* Dropdown Menu for User Navigation */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {userNavigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : token ? (
                <Link to="/dashboard" className="border-b-2 border-primary">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login">
                  <HiOutlineUser className="w-6 h-6" />
                </Link>
              )}
            </div>

            <button className="hidden sm:block">
              <HiOutlineHeart className="w-6 h-6" />
            </button>

            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
            >
              <HiOutlineShoppingCart className="w-6 h-6" />
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length > 0 ? cartItems.length : "0"}
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center">
          {/* Header Section with Logo and Close Button */}
          <div className="absolute top-6 w-full flex justify-between items-center px-6">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">Apali Book</span>
            </Link>
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX className="w-8 h-8" />
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <ul className="space-y-8 text-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* If the user is logged in, show additional navigation */}
            {currentUser && (
              <>
                {userNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl text-white hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-2xl text-white hover:text-primary"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            {/* If not logged in but token exists */}
            {!currentUser && token && (
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {/* If no user is logged in */}
            {!currentUser && !token && (
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white hover:text-primary"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
