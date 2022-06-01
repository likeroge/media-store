import { Box, Button, Center, Heading, Text, useToast } from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { addToCart } from "../store/slices/cartSlice";
import { IProduct } from "../types/redux.types";

export const Product: FC<IProduct> = (product) => {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const toast = useToast();

  const onAddToCartHandler = () => {
    toast({
      title: "Добавлено в корзину",
      description: "",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    dispatch(
      addToCart({
        category: product.category,
        id: product.id,
        inStock: product.inStock,
        price: product.price,
        title: product.title,
      })
    );
  };

  return (
    <Center>
      <Box
        p={2}
        border="1px solid"
        borderColor={"gray.200"}
        boxShadow={"2xl"}
        borderRadius={"md"}
        width={{ base: "80%", lg: "300px", md: "200px", xl: "300px" }}
        height={{ base: "220px", lg: "300px", md: "200px", xl: "250px" }}
      >
        <Box h="50%" w="full" bg={"green.300"}></Box>
        <Center>
          <Heading size={"sm"}>{product.title}</Heading>
        </Center>
        <Center>
          <Text>Цена {product.price} ₽</Text>
        </Center>
        <Center>
          <Button
            onClick={onAddToCartHandler}
            w="70%"
            colorScheme={
              cart.products.filter((el) => el.id === product.id)[0]
                ? "blackAlpha"
                : "gray"
            }
          >
            В корзину
          </Button>
        </Center>
      </Box>
    </Center>
  );
};
