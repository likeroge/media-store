import { createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = [
  {
    id: 1,
    price: 1000,
    inStock: true,
    title: "IPhone73213213123123",
    category: "electronics",
  },
  {
    id: 2,
    price: 3000,
    inStock: true,
    title: "Samsung X100",
    category: "electronics",
  },
  {
    id: 3,
    price: 500,
    inStock: true,
    title: "Harry Potter",
    category: "books",
  },
  {
    id: 4,
    price: 300,
    inStock: true,
    title: "1984",
    category: "books",
  },
  {
    id: 5,
    price: 800,
    inStock: true,
    title: "Game of Thrones",
    category: "books",
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
