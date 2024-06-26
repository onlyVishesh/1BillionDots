import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Header = () => {
  const checkboxRef = useRef(null);

  const handleMenuClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <header className="mb-auto">
      <nav className="z-20 w-full bg-white dark:border-gray-600">
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
              <Link to="/" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleMenuClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={handleMenuClick}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={handleMenuClick}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleMenuClick}>
                Blogs
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
