import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { DrinkType } from "../../types/types";

type DrinksArray = Array<DrinkType>;

type DrinksState = {
  drinksArr: DrinksArray,
  favourite: DrinksArray,
};

type AddDrinkType = {
  responce: DrinksArray;
};

const initialState: DrinksState = {
  drinksArr: [],
  favourite: [],
};

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrinks(state, action: PayloadAction<AddDrinkType>) {
      state.drinksArr = action.payload.responce;
    },
    addDrinkToFavourite(state:any, action:PayloadAction<DrinksArray>) {
      state.favourite.push(action.payload);
    },
    removeDrinkFromFavourite(state:any, action:PayloadAction<DrinksArray>) {
      state.favourite = state.favourite.filter((drink:any) => drink.idDrink !== action.payload);
    },
  },
});

export const {addDrinks, addDrinkToFavourite, removeDrinkFromFavourite} = drinkSlice.actions;

export default drinkSlice.reducer;