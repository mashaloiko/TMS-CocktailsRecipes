import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "../reducer/drinkSlice";

export type RootState = ReturnType<typeof store.getState>;

export type DrinksDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    drinks: drinkReducer
  },
});