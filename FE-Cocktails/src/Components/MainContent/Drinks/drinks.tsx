import { useEffect, useState } from "react";
import { api } from "../../../Axios/instance";
import { ErrorMessage } from "../../Common/Error/error";

export interface DrinkType {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions?: string;
}


export const Drinks = () => {
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      const result = await api.get(`/api/json/v1/1/search.php?f=a`);
      setDrinks(result.data.drinks);
      console.log(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        {error ? <ErrorMessage errorText={error} /> : null}
        {drinks.map((drink) => (
          <div>
            {drink.strDrinkThumb} {drink.strDrink}
          </div>
          ))}
      </div>
    </div>
  )
};