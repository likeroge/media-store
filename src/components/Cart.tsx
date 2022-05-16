import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Box width={"100%"}>
      <Flex alignItems={"center"} justifyContent="space-between" mb={5}>
        <Heading size={"md"}>Корзина</Heading>
        <Text>{cart.products.length} предмета</Text>
      </Flex>
      <Divider />

      {cart.products.length === 0 ? (
        <Text>Ваша корзина пуста</Text>
      ) : (
        <>
          <Box maxH={80}>
            {Array.from(new Set(cart.products.map((el) => el.id)))
              .map((idx) =>
                cart.products.find(
                  (filtered_product) => filtered_product.id === idx
                )
              )
              .flat()
              .sort((a, b) => a.id - b.id)
              .map((product, idx) => (
                <Flex
                  alignItems={"center"}
                  justifyContent="space-between"
                  key={idx}
                  w="100%"
                >
                  <Text w={"60%"}>{product?.title}</Text>
                  <Box w={"40%"}>
                    <Button
                      p={0}
                      variant={"outline"}
                      borderRadius={30}
                      h={5}
                      onClick={() => dispatch(addToCart({ ...product }))}
                    >
                      +
                    </Button>
                    {
                      cart.products.filter((el) => el?.id === product?.id)
                        .length
                    }
                    <Button
                      // onClick={() => dispatch(removeFromCart(product.id))}
                      onClick={() => dispatch(removeFromCart(product))}
                      p={0}
                      variant={"outline"}
                      borderRadius={30}
                      h={5}
                    >
                      -
                    </Button>
                  </Box>
                </Flex>
              ))}
          </Box>
          <Divider />
          <Text mt={5}>Итого: {cart.totalPrice} ₽</Text>
        </>
      )}
    </Box>
  );
};
