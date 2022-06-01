import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IProduct } from "../../types/redux.types";

const initialState: ICart = {
  products: [
    // {
    //   id: 5,
    //   price: 800,
    //   inStock: true,
    //   title: "Game of Thrones",
    //   category: "books",
    // },
  ],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<IProduct>) {
      let flatProductsState = state.products.map((el) => el.id);
      let productIndexToRemove = flatProductsState.indexOf(action.payload.id);
      console.log(productIndexToRemove);
      let prevList = state.products;
      let updatedProductsList = state.products.filter(
        (el) => productIndexToRemove !== prevList.indexOf(el)
      );

      console.log(updatedProductsList);
      state.products = updatedProductsList;
      state.totalPrice -= action.payload.price;
    },

    removeAllItemsFromCart(state) {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAllItemsFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
