import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  recipesArr: [],
  myCount: 1,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
});

export default recipeSlice.reducer;