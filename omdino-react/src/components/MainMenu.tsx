import { useState } from "react";
import { Link } from "react-router-dom";
import "../resources/dest/css/menu.css";
// import xIcon from "../resources/svg/x.svg";
// import menuIcon from "../resources/svg/menu.svg";
import { ReactComponent as MenuIcon } from "../resources/svg/menu.svg";
import { ReactComponent as XIcon } from "../resources/svg/x.svg";


export const MainMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => {
      console.log("Menu Open:", !prev); // Debugging
      return !prev;
    });
  };

  return (
    <>
   
    <nav className="navbar py-md-3 p-0 border-dashed repeated-x normal gray d-md-flex  ">
      <div className="container">
      <button className="menu-icon p-0 border-0" onClick={toggleMenu} aria-label="Toggle Menu">
      {isOpen ? <XIcon width={25} height={25} /> : <MenuIcon width={25} height={25} />}
      {/* <img src={isOpen ? xIcon : menuIcon} alt="Menu Icon" width={30} height={30} /> */}
        </button>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"} >
          <li className="nav-item pe-3">
            <Link className="nav-link fw-bold fs-md-17 py-2" to="/" onClick={toggleMenu}>
             Home Page
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link fw-bold fs-md-17 py-2" to="/men-page" onClick={toggleMenu} >
              Men's Clothing
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link fw-bold fs-md-17 py-2" to="/women-page" onClick={toggleMenu} >
              Women's Clothing
            </Link>
          </li>
          <li className="nav-item pe-3 dropdown">
            <Link
              className="nav-link fw-bold dropdown-toggle py-2"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accessories
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/" onClick={toggleMenu}>
                  Watch
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/" onClick={toggleMenu}>
                  Powerbank
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/" onClick={toggleMenu}>
                  Handsfree
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link fw-bold fs-md-17 py-2" to="/about-us" onClick={toggleMenu}>
              About us
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link fw-bold fs-md-17 py-2" to="/contact-us" onClick={toggleMenu}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
