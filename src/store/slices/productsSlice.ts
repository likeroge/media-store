import { createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [
  {
    id: 1,
    price: 1000,
    inStock: true,
    title: "IPhone",
    category: "electronics",
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
