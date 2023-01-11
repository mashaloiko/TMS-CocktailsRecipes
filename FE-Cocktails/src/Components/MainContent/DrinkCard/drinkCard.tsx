import { Link } from "react-router-dom";
import "./style/drinkCard.css";

interface DrinkCard {
  id: string | number;
  title: string;
  img:string;
  letter?: string | undefined;
};

export const DrinkCard = ({id, title, img, letter} : DrinkCard) => {
  return (
    <>
      <Link className="drinks__wrap" key={id} to={`/catalog/${letter}/${id}`}>
        <div className="drinks__hover">
          <h2 className="drinks__title">{title}</h2>
        </div>
        <img className="drinks__img" src={img} alt="drink" />
      </Link>
    </>
  )
}