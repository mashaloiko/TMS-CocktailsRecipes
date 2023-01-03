import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
import { ErrorMessage } from "../../Common/Error/error";
import "./style/singleDrink.css";

interface SingleDrinkType {
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
};

export const SingleDrink = () => {
  const params = useParams<any>();
  const [drink, setDrink] = useState<SingleDrinkType>();
  const [error, setError] = useState<any>("");

  useEffect(() => {
    getSingleDrink();
  }, []);

  const getSingleDrink = async () => {
    try {
      const res = await api.get(`/api/json/v1/1/search.php?s=${params.drink}`);
      setDrink(res.data.drinks);
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="drink">
      <div className="drink__container">
        {error ? <ErrorMessage errorText={error} /> : null}
            <h2 className="drink__title">{drink?.strDrink}</h2>
            <div className="drink__wrap">
              <img className="drink__img" src={drink?.strDrinkThumb} alt="drink" />
            </div>
      </div>
    </div>
  )
}