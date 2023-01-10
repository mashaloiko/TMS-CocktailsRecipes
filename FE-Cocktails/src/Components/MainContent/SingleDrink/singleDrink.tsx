import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
import { ErrorMessage } from "../../Common/Error/error";
import "./style/singleDrink.css";
import left from '../../../Assets/left.svg';
import { DrinkType } from "../../../types/types";
import { DrinkInfo } from "../DrinkInfo/drinkInfo";



export const SingleDrink = () => {
  const navigate = useNavigate();
  const params = useParams<any>();
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    getSingleDrink();
  }, []);

  const getSingleDrink = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(`/api/json/v1/1/lookup.php?i=${params.id}`);
      setDrinks(res.data.drinks);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleGoBack = () => navigate(-1);

  return (
    <div className="drink">
      <div className="drink__loader">
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="black" 
            ariaLabel="three-dots-loading"
            visible={isLoading}
          />
      </div>
      <div className="drink__container">
        {error && <ErrorMessage errorText={error} />}
        {!isLoading &&
          drinks.map((drink:DrinkType) => (
            <DrinkInfo 
              key={drink.idDrink}
              title={drink.strDrink}
              img={drink.strDrinkThumb}
              ingredient1={drink.strIngredient1}
              ingredient2={drink.strIngredient2}
              ingredient3={drink.strIngredient3}
              ingredient4={drink.strIngredient4}
              ingredient5={drink.strIngredient5}
              ingredient6={drink.strIngredient6}
              ingredient7={drink.strIngredient7}
              measure1={drink.strMeasure1}
              measure2={drink.strMeasure2}
              measure3={drink.strMeasure3}
              measure4={drink.strMeasure4}
              measure5={drink.strMeasure5}
              measure6={drink.strMeasure6}
              measure7={drink.strMeasure7} 
              instruction={drink.strInstructions}
              drink={drink}        
            />
            ))}
        <button className="drink__button" onClick={handleGoBack}>
          <img className="drink__arrow" src={left} alt="back" />
        </button>
      </div>
    </div>
  )
}