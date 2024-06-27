import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const location = useLocation();
  const checkboxRef = useRef(null);

  const handleMenuClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="mb-28">
      <nav className="fixed top-0 z-20 w-full bg-white dark:border-gray-600">
        <ul className="navigation relative mx-auto flex max-w-[95vw] flex-wrap items-center justify-between py-4">
          <li className="logo">
            <Link to="/" onClick={handleMenuClick}>
              <h3 className="w-14">
                <img src={logo} alt="Logo" />
              </h3>
            </Link>
          </li>
          <input
            type="checkbox"
            id="check"
            className="hidden"
            ref={checkboxRef}
          />
          <ul className="menu flex [&>li>a]:relative [&>li>a]:text-center [&>li>a]:text-lg [&>li>a]:font-medium [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li]:pl-8">
            <li>
              <Link to="/" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/") ? "text-orange-500" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/about") ? "text-orange-500" : ""}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/gallery") ? "text-orange-500" : ""}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/service") ? "text-orange-500" : ""}`}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/blog") ? "text-orange-500" : ""}`}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMenuClick} className={`hover:text-orange-500 ${isActive("/contact") ? "text-orange-500" : ""}`}>
                Contact Us
              </Link>
            </li>
            <li>
              <label htmlFor="check" className="close-menu cursor-pointer">
                <FontAwesomeIcon icon={faXmark} />
              </label>
            </li>
          </ul>
          <label htmlFor="check" className="open-menu cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
