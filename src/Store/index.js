import { configureStore } from "@reduxjs/toolkit";
import { getProductReducer } from "./Slices";

let storedata = configureStore({
  reducer: {
    getProductReducer: getProductReducer,
  },
});

export default storedata;
