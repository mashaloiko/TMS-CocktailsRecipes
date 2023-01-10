import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
import { addDrinks } from "../../../Redux/reducer/drinkSlice";
import { DrinksDispatch, RootState } from "../../../Redux/store";
import { DrinkType } from "../../../types/types";
import { ErrorMessage } from "../../Common/Error/error";
import { NoData } from "../../Common/noData/noData";
import { DrinkCard } from "../DrinkCard/drinkCard";
import "./style/drinks.css";


export const Drinks = () => {
  const params = useParams<any>();
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const drinks = useSelector((state: RootState) => state.drinks.drinksArr);

  const dispatch = useDispatch<DrinksDispatch>();

  const getDrinks = async () => {
    try {
      setIsLoading(true);
      const result = await api.get(`/api/json/v1/1/search.php?f=${params.letter}`);
      dispatch(addDrinks({ responce: result.data.drinks}));
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
      <div className="drinks__container">
        {drinks === null ? <NoData /> : null}
        <div className="drinks__block">
        {error ? <ErrorMessage errorText={error} /> : null}
        {!isLoading &&
          drinks?.map((drink: DrinkType) => (
            <DrinkCard 
              key={drink.idDrink}
              id={drink.idDrink}
              title={drink.strDrink}
              img={drink.strDrinkThumb}
              letter={params.letter}
            />
          ))
        }
        </div>
      </div>
    </div>
  )
};