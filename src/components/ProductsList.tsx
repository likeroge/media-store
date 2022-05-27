import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { addToCart } from "../store/slices/cartSlice";
import { IProduct } from "../types/redux.types";
import { Product } from "./Product";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  let name = { name: "Egor" };
  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, lg: 4, xl: 5 }}
      spacing={10}
      pb={20}
      // w="100%"
      // h={"100%"}
    >
      {products.map((product: IProduct) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
  );
};
