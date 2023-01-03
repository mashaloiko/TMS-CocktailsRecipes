import { NavLink } from "react-router-dom";
import "./style/catalog.scss"

export const Catalog = () => {

  return (
    <div className="catalog">
      <div className="catalog__container">
        <NavLink key="a" to={`/catalog/a`} className="catalog__link">A </NavLink>
        <span>/ </span>
        <NavLink key="b" to={`/catalog/b`} className="catalog__link">B </NavLink>
        <span>/ </span>
        <NavLink key="c" to={`/catalog/c`} className="catalog__link">C </NavLink>
        <span>/ </span>
        <NavLink key="d" to={`/catalog/d`} className="catalog__link">D </NavLink>
        <span>/ </span>
        <NavLink key="e" to={`/catalog/e`} className="catalog__link">E </NavLink>
        <span>/ </span>
        <NavLink key="f" to={`/catalog/f`} className="catalog__link">F </NavLink>
        <span>/ </span>
        <NavLink key="g" to={`/catalog/g`} className="catalog__link">G </NavLink>
        <span>/ </span>
        <NavLink key="h" to={`/catalog/h`} className="catalog__link">H </NavLink>
        <span>/ </span>
        <NavLink key="i" to={`/catalog/i`} className="catalog__link">I </NavLink>
        <span>/ </span>
        <NavLink key="j" to={`/catalog/j`} className="catalog__link">J </NavLink>
        <span>/ </span>
        <NavLink key="k" to={`/catalog/k`} className="catalog__link">K </NavLink>
        <span>/ </span>
        <NavLink key="l" to={`/catalog/l`} className="catalog__link">L </NavLink>
        <span>/ </span>
        <NavLink key="m" to={`/catalog/m`} className="catalog__link">M </NavLink>
        <span>/ </span>
        <NavLink key="n" to={`/catalog/n`} className="catalog__link">N </NavLink>
        <span>/ </span>
        <NavLink key="o" to={`/catalog/o`} className="catalog__link">O </NavLink>
        <span>/ </span>
        <NavLink key="p" to={`/catalog/p`} className="catalog__link">P </NavLink>
        <span>/ </span>
        <NavLink key="q" to={`/catalog/q`} className="catalog__link">q </NavLink>
        <span>/ </span>
        <NavLink key="r" to={`/catalog/r`} className="catalog__link">r </NavLink>
        <span>/ </span>
        <NavLink key="s" to={`/catalog/s`} className="catalog__link">s </NavLink>
        <span>/ </span>
        <NavLink key="t" to={`/catalog/t`} className="catalog__link">t </NavLink>
        <span>/ </span>
        <NavLink key="u" to={`/catalog/u`} className="catalog__link">u </NavLink>
        <span>/ </span>
        <NavLink key="v" to={`/catalog/v`} className="catalog__link">v </NavLink>
        <span>/ </span>
        <NavLink key="w" to={`/catalog/w`} className="catalog__link">w </NavLink>
        <span>/ </span>
        <NavLink key="x" to={`/catalog/x`} className="catalog__link">x </NavLink>
        <span>/ </span>
        <NavLink key="y" to={`/catalog/y`} className="catalog__link">y </NavLink>
        <span>/ </span>
        <NavLink key="z" to={`/catalog/z`} className="catalog__link">z </NavLink>
      </div>
    </div>
  )
}