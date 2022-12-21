import { useEffect, useState } from "react";
import { api } from "../../../Axios/instance";


export interface DrinkType {
  strDrink: string;
  strInstructions: string;
}
const styles = {
  display: "flex",
  marginTop: 80,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
} as const;

export const Drinks = () => {
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      const result = await api.get("/api/json/v1/1/search.php?f=a");
      setDrinks(result.data);
      console.log(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={styles}>
      <ul>
        {error ? <p>text={error}</p> : null}
        {drinks.map((drink) => (
          <li>
            {drink.strDrink} {drink.strInstructions}
          </li>
          ))}
      </ul>
    </div>
  )
};