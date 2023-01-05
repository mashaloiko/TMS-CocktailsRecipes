import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../reducer/drinkSlice";

export const store = configureStore({
  reducer: {
    drinks: drinkReducer
  },
});