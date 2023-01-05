import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
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
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      setIsLoading(true);
      const result = await api.get(`/api/json/v1/1/search.php?f=${params.letter}`);
      setDrinks(result.data.drinks);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

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
        {drinks.map((drink) => (
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