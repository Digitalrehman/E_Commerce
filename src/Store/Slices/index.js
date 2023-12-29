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
    builder.addCase(fetchproducts.pending, (state) => {
      state.status = STATUSES.GET_PRODUCTS;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      state.status = STATUSES.GET_PRODUCTS_SUCCESS;
      state.datas.push(...action.payload);
    });
    builder.addCase(fetchproducts.rejected, (state) => {
      state.status = STATUSES.GET_PRODUCTS_FAIL;
    });
  },
});

let { reducer } = products;

let fetchproducts = createAsyncThunk("fetch/products", async () => {
  let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  let fetch = response.data.categories;
  return fetch;
});

export { fetchproducts, reducer as getProductReducer };
