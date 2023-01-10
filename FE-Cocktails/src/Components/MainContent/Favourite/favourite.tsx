import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeDrinkFromFavourite } from "../../../Redux/reducer/drinkSlice";
import { DrinksDispatch, RootState } from "../../../Redux/store";
import { DrinkType } from "../../../types/types";
import { DrinkCard } from "../DrinkCard/drinkCard";
import remove from '../../../Assets/remove.svg';
import "./style/favourite.css";

export const Favourite = () => {
  const params = useParams();
  const dispatch = useDispatch<DrinksDispatch>();
  const drinks = useSelector((state: RootState) => state?.drinks?.favourite);
  const removeDrink = (idDrink : any) => dispatch(removeDrinkFromFavourite(idDrink));


  return (
    <div className="favourite">
      <div className="favourite__container">
        <h2 className="favourite__title">Favourite</h2>
        {drinks.map((drink:DrinkType) => (
        <div className="favourite__block" key={drink.idDrink}>
          <DrinkCard 
            id={drink.idDrink}
            title={drink.strDrink}
            img={drink.strDrinkThumb}
            letter={params.letter}
          />
          <button className="favorite__button" onClick={() => removeDrink(drink.idDrink)}>
            <img className="favourite__img" src={remove} alt="remove" />
          </button>
        </div>
        ))}
      </div>
    </div>
  )
} 