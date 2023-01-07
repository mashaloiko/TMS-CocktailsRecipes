import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Drink {
  letter?: string;
  idDrink: number;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
};

type DrinksArray = Array<Drink>;

type DrinksState = {
  drinksArr: DrinksArray,
  myCount: number,
};

type AddPostType = {
  responce: DrinksArray;
};

const initialState: DrinksState = {
  drinksArr: [],
  myCount: 1,
};

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrinks(state, action: PayloadAction<AddPostType>) {
      state.drinksArr = action.payload.responce;
    }
  },
});

export const {addDrinks} = drinkSlice.actions;

export default drinkSlice.reducer;