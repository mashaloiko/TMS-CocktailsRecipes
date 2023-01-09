import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style/header.css"
import logo from '../../Assets/logo.svg';
import { useState } from "react";

export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  }
  
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__wrap">
          <Link to="/" className="header__logo">
            <img className="header__img" src={logo} alt="logo" />
          </Link>
          <nav className="header__navigation">
            <div className={isNavExpanded ? "header__block expanded" : "header__block"}>
              <NavLink to="/" className="header__link">Home</NavLink>
              <NavLink to="/catalog" className="header__link">Catalog</NavLink>
              <NavLink to="/favourite" className="header__link">Favourite</NavLink>
              <NavLink to="/login" className="header__link">LogIn</NavLink>
            </div>
            <button className="header__nav-mobile" onClick={handleNavExpanded}>
              <svg className="header__img-mobile" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H24V3H0V0ZM0 7.5H24V10.5H0V7.5ZM0 15H24V18H0V15Z" fill="white" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};