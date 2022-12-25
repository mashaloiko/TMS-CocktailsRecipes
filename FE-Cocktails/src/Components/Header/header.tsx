import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style/header.css"
import logo from '../../Assets/logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img className="header__img" src={logo} alt="logo" />
        </Link>
        <nav className="header__navigation">
          <NavLink to="/" className="header__link">Home</NavLink>
          <NavLink to="/catalog" className="header__link">Catalog</NavLink>
          <NavLink to="/" className="header__link">Favourite</NavLink>
          <NavLink to="/login" className="header__link">LogIn</NavLink>
        </nav>
      </div>
    </div>
  );
};