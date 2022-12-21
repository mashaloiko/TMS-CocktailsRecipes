import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../reducer/recipeSlice"

export const store = configureStore({
  reducer: {
    recipes: recipeReducer
  },
});