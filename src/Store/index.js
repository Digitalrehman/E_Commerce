import { configureStore } from "@reduxjs/toolkit";
import { getProductReducer } from "./Slices";
import { CardItemProducts } from "./Slices/Card";

let storedata = configureStore({
  reducer: {
    getProductReducer: getProductReducer,
    CardItemProducts: CardItemProducts,
  },
});

export default storedata;
