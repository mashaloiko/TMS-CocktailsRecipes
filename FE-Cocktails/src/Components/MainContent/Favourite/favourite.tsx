import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DrinksDispatch, RootState } from "../../../Redux/store";
import { DrinkType } from "../../../types/types";
import "./style/favourite.css";

export const Favourite = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();
  const dispatch = useDispatch<DrinksDispatch>();
  const drinks = useSelector((state: RootState) => state?.drinks?.favourite);

  return (
    <div className="favourite">
      <div className="drinks__loader">
      <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="black" 
          ariaLabel="three-dots-loading"
          visible={isLoading}
        />
      </div>
      <div className="favourite__container">
        <h2 className="favourite__title">Favourite</h2>
        <div className="favourite__block">
        {!isLoading &&
          drinks.map((drink:DrinkType) => (
            <>
              <Link className="favourite__wrap" key={drink.idDrink} to={`/catalog/${params.letter}/${drink.idDrink}`}>
                <div className="favourite__hover">
                  <h2 className="favourite__name">{drink.strDrink}</h2>
                </div>
                <img className="favourite__img" src={drink.strDrinkThumb} alt="drink" />
              </Link>
            </>
            ))}
        </div>
      </div>
    </div>
  )
} 