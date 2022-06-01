import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";
import { IProduct } from "../types/redux.types";

export const CartItem: FC<IProduct> = (product, idx: number) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Flex
      alignItems={"center"}
      justifyContent="space-between"
      key={idx}
      w="100%"
      height={10}
      mb={1}
    >
      <Text w={"55%"}>{product?.title}</Text>
      <Flex w={"45%"} justifyContent="flex-end" alignItems={"center"}>
        <Button
          p={0}
          variant={"outline"}
          borderRadius={30}
          h={5}
          onClick={() => dispatch(addToCart({ ...product }))}
          mr={"3px"}
        >
          +
        </Button>
        {cart.products.filter((el) => el?.id === product?.id).length}
        <Button
          onClick={() => dispatch(removeFromCart(product))}
          p={0}
          variant={"outline"}
          borderRadius={30}
          h={5}
          ml={"3px"}
        >
          -
        </Button>
      </Flex>
    </Flex>
  );
};
