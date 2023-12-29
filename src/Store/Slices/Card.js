import { createSlice } from "@reduxjs/toolkit";

let INITAIL_STATE = {
  CardProduct: [],
  quantity: 0,
};
let cardproduct = createSlice({
  name: "card_Product",
  initialState: INITAIL_STATE,
  reducers: {
    addCardProduct: (state, action) => {
      state.CardProduct.push(action.payload);
      state.quantity = state.quantity + 1;
    },
    removeProduct: (state, action) => {
      state.CardProduct = state.CardProduct.filter(
        (item) => item.idCategory !== action.payload
      );
      state.quantity = state.quantity - 1;
    },
  },
});
const { addCardProduct, removeProduct } = cardproduct.actions;
const { reducer } = cardproduct;
export { addCardProduct, removeProduct, reducer as CardItemProducts };
