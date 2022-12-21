import { NavLink } from "react-router-dom";
import "./style/header.css"


export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__logo">The cocktails recipes</p>
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