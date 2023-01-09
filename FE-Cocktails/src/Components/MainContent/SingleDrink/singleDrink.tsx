import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { api } from "../../../Axios/instance";
import { ErrorMessage } from "../../Common/Error/error";
import "./style/singleDrink.css";
import left from '../../../Assets/left.svg';
import right from '../../../Assets/right.svg';
import addHeart from '../../../Assets/addHeart.svg';
import checkHeart from '../../../Assets/checkHeart.svg';
import { useDispatch } from "react-redux";
import { DrinksDispatch } from "../../../Redux/store";
import { addDrinkToFavourite } from "../../../Redux/reducer/drinkSlice";
import { DrinkType } from "../../../types/types";



export const SingleDrink = () => {
  const params = useParams<any>();
  const [drinks, setDrinks] = useState<Array<DrinkType>>([]);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const dispatch = useDispatch<DrinksDispatch>();
  

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

  const handleAddToFavourite = () => {
    setIsAdded(!isAdded);
    dispatch(addDrinkToFavourite(drinks))
  };


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
          <>
            <div className="drink__wrapper">
              <h2 className="drink__title">{drink.strDrink}</h2>
              <button className="drink__favourite" onClick={handleAddToFavourite}>
                {isAdded 
                ? <img className="drink__icon" src={checkHeart} alt="heart" /> 
                : <img className="drink__icon" src={addHeart} alt="heart" />
                }
              </button>
            </div>
            <div className="drink__block">
              <div className="drink__wrap">
                <img className="drink__img" src={drink.strDrinkThumb} alt="drink" />
              </div>
              <div className="drink__ingredients">
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient1}</span>
                  <span>{drink.strMeasure1}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient2}</span>
                  <span>{drink.strMeasure2}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient3}</span>
                  <span>{drink.strMeasure3}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient4}</span>
                  <span>{drink.strMeasure4}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient5}</span>
                  <span>{drink.strMeasure5}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient6}</span>
                  <span>{drink.strMeasure6}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{drink.strIngredient7}</span>
                  <span>{drink.strMeasure7}</span>
                </div>
              </div>
            </div>
            <p className="drink__text">{drink.strInstructions}</p>
          </>
          ))}
          <div className="drink__arrows">
            <button className="drink__button" >
              <img className="drink__arrow" src={left} alt="arrow" />
            </button>
            <button className="drink__button">
              <img className="drink__arrow" src={right} alt="arrow" />
            </button>
          </div>
      </div>
    </div>
  )
}