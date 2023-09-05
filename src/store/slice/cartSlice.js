import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAdd(state, action) {
      return [...state, action.payload];
    },
    cartRemove(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { cartAdd, cartRemove } = cartSlice.actions;
export default cartSlice.reducer;
