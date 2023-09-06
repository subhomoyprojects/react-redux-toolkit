import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  //   reducers: {
  //     productData(state, action) {
  //       return (state.data = action.payload);
  //     },
  //     productStatuses(state, action) {
  //       return (state.statuses = action.payload);
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// export const { productData, productStatuses } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("fetch/product", async () => {
  let url = `https://fakestoreapi.com/products`;
  let res = await fetch(url);
  let data = await res.json();
  return data;
});
