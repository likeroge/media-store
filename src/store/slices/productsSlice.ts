import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/redux.types";

const initialState: IProduct[] = [
  {
    id: 1,
    price: 1000,
    inStock: true,
    title: "IPhone733",
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
  {
    id: 6,
    price: 2800,
    inStock: true,
    title: "Macbook",
    category: "electronics",
  },
  {
    id: 7,
    price: 1800,
    inStock: true,
    title: "Ipad",
    category: "electronics",
  },
  {
    id: 8,
    price: 4800,
    inStock: true,
    title: "TV 4K",
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
