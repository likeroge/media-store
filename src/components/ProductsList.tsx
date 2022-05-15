import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../hooks/redux.hooks";
import { addToCart } from "../store/slices/cartSlice";
import { Product } from "./Product";

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  return (
    <SimpleGrid
      columns={3}
      spacing={10}
      pb={20}
      // w="100%"
      // h={"100%"}
    >
      <Product id={1} />
      <Product id={2} />
      <Product id={3} />
      <Product id={4} />
      <Product id={5} />
    </SimpleGrid>
  );
};
