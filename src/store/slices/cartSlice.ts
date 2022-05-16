import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICart = {
  products: [],
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

      // let updatedProductsList = state.products.filter(
      //   (el) => state.products.indexOf(el) !== productIndexToRemove
      // );
      console.log(updatedProductsList);
      state.products = updatedProductsList;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
