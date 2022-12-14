import { NavLink } from "react-router-dom";
import "./style/header.css"


export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__logo">The cocktails reciepes</p>
        <nav className="header__navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Catalog</NavLink>
          <NavLink to="/">Favourite</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </nav>
      </div>
    </div>
  );
};