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
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import {
  addToCart,
  removeAllItemsFromCart,
  removeFromCart,
} from "../store/slices/cartSlice";
import { setOrderState } from "../store/slices/orderSlice";
import { StringHelper } from "../utils/StringHelper";
import { CartItem } from "./CartItem";
import { CustomButton } from "./CustomButton";

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const order = useAppSelector((state) => state.order);

  const dispatch = useAppDispatch();
  const correctItemsWordInRus = StringHelper.getCartItemsSuffix(
    cart.products.length
  );
  const navigate = useNavigate();

  const onOrder = () => {
    dispatch(setOrderState({ type: "products", value: cart.products }));
    dispatch(setOrderState({ type: "totalPrice", value: cart.totalPrice }));
    navigate("/order/userinfo");
    console.log(order);
  };

  return (
    <Box width={"100%"} height="100%">
      <Flex alignItems={"center"} justifyContent="space-between" mb={3}>
        <Heading size={"md"}>Корзина</Heading>
        <Text>
          {cart.products.length} {correctItemsWordInRus}
        </Text>
      </Flex>
      <Divider />

      {cart.products.length === 0 ? (
        <Text>Ваша корзина пуста</Text>
      ) : (
        <>
          <Box maxH={"50%"} overflow="scroll" mt={5}>
            {Array.from(new Set(cart.products.map((el) => el.id)))
              .map((idx) =>
                cart.products.find(
                  (filtered_product) => filtered_product.id === idx
                )
              )
              .flat()
              .sort((a, b) => a.id - b.id)
              .map((product, idx) => (
                <CartItem key={idx} {...product} />
              ))}
          </Box>
          <Divider />
          <Text mt={5}>Итого: {cart.totalPrice} ₽</Text>
          <Flex
            mt={10}
            flexDir={{ base: "column", sm: "row" }}
            justifyContent="space-around"
          >
            <CustomButton
              onClick={onOrder}
              colorScheme={"green"}
              w={{ base: "100%", sm: "30%" }}
              mb={{ base: 5 }}
            >
              Оформить заказ
            </CustomButton>

            <CustomButton
              onClick={() => dispatch(removeAllItemsFromCart())}
              colorScheme={"red"}
              w={{ base: "100%", sm: "30%" }}
            >
              Отчистить корзину
            </CustomButton>
          </Flex>
        </>
      )}
    </Box>
  );
};
