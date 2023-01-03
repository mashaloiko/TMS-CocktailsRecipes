import { useEffect, useState } from "react";
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

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      const result = await api.get(`/api/json/v1/1/search.php?f=${params.letter}`);
      setDrinks(result.data.drinks);
      console.log(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="drinks">
      <div className="drinks__container">
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