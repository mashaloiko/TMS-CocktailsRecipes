import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  drinksArr: [],
  myCount: 1,
};

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrinks(state, action) {
      state.drinksArr = action.payload.data;
    }
  },
});

export const {addDrinks} = drinkSlice.actions;

export default drinkSlice.reducer;