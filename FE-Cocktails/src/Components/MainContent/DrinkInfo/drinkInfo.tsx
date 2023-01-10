import { useDispatch, useSelector } from "react-redux";
import { DrinksDispatch, RootState } from "../../../Redux/store";
import { addDrinkToFavourite, removeDrinkFromFavourite } from "../../../Redux/reducer/drinkSlice";
import { DrinkInfoProps } from "../../../types/types";
import addHeart from '../../../Assets/addHeart.svg';
import checkHeart from '../../../Assets/checkHeart.svg';
import "./style/drinkInfo.css";


export const DrinkInfo = ({
  title, 
  img, 
  ingredient1, 
  ingredient2, 
  ingredient3, 
  ingredient4, 
  ingredient5, 
  ingredient6, 
  ingredient7,
  measure1,
  measure2,
  measure3,
  measure4,
  measure5,
  measure6,
  measure7,
  instruction,
  drink
}: DrinkInfoProps) => {
  const items = useSelector((state: RootState) => state?.drinks?.favourite);
  const isItemInCart = items.some((item) => item.idDrink === drink.idDrink);
  const dispatch = useDispatch<DrinksDispatch>();
  const handleAddToFavourite = (e : React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(removeDrinkFromFavourite(drink.idDrink));
    } else {
      dispatch(addDrinkToFavourite(drink));
    }
  };

  return (
    <>
      <div className="drink__wrapper">
              <h2 className="drink__title">{title}</h2>
              <button className="drink__favourite" onClick={handleAddToFavourite}> 
                {isItemInCart ? <img className="drink__icon" src={checkHeart} alt="heart" /> :
                <img className="drink__icon" src={addHeart} alt="heart" />}
              </button>
            </div>
            <div className="drink__block">
              <div className="drink__wrap">
                <img className="drink__img" src={img} alt="drink" />
              </div>
              <div className="drink__ingredients">
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient1}</span>
                  <span>{measure1}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient2}</span>
                  <span>{measure2}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient3}</span>
                  <span>{measure3}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient4}</span>
                  <span>{measure4}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient5}</span>
                  <span>{measure5}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient6}</span>
                  <span>{measure6}</span>
                </div>
                <div className="drink__ingredient">
                  <span className="drink__measure">{ingredient7}</span>
                  <span>{measure7}</span>
                </div>
              </div>
            </div>
            <p className="drink__text">{instruction}</p>
    </>
  )
}
