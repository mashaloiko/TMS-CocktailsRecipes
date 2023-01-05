import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
import { addDrinks } from "../../../Redux/reducer/drinkSlice";
import { ErrorMessage } from "../../Common/Error/error";
import "./style/drinks.css";

export interface DrinkType {
  idDrink: number;
  strDrink?: string;
  strDrinkThumb: string;
  strInstructions?: string;
  letter: string;
}

export const Drinks = () => {
  const params = useParams<any>();
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  

  const drinks = useSelector((state: any) => state.drinks.drinksArr);

  const dispatch = useDispatch();

  const getDrinks = async () => {
    try {
      setIsLoading(true);
      const result = await api.get(`/api/json/v1/1/search.php?f=${params.letter}`);
      dispatch(addDrinks({ data: result.data.drinks}));
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className="drinks">
      <div className="drinks__container">
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="black" 
        ariaLabel="three-dots-loading"
        visible={isLoading}
      />
        {error ? <ErrorMessage errorText={error} /> : null}
        {drinks.map((drink: DrinkType) => (
          <>
            <Link className="drinks__wrap" to={`/catalog/${params.letter}/${drink.idDrink}`}>
              <div className="drinks__hover">
                <h2 className="drinks__title">{drink.strDrink}</h2>
              </div>
              <img className="drinks__img" src={drink.strDrinkThumb} alt="drink" />
            </Link>
          </>
          ))}
      </div>
    </div>
  )
};