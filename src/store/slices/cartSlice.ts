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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
