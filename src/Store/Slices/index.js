import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../status";

let INITIAL_STATE = {
  datas: [],
  status: STATUSES,
};

let products = createSlice({
  name: "GET PRODUCTS",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state, action) => {
      state.status = STATUSES.GET_PRODUCTS;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.status = STATUSES.GET_PRODUCTS_SUCCESS;
      state.datas.push(...action.payload);
    });
    builder.addCase(fetchproducts.rejected, (state, action) => {
      state.status = STATUSES.GET_PRODUCTS_FAIL;
    });
  },
});

let { reducer } = products;

let fetchproducts = createAsyncThunk("fetch/products", async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  let fetch = response.data;
  return fetch;
});

export { fetchproducts, reducer as getProductReducer };
