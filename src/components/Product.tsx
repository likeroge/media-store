import { Box, Center, useToast } from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { addToCart } from "../store/slices/cartSlice";

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
        bg="tomato"
        // bg={
        //   cart.products.filter((el) => el.id === id)[0] ? "green.400" : "tomato"
        // }
        // h="100px"
        // height={{ base: "50px", xs: "100px", md: "200px" }}
        // width={{ base: "50px", xs: "100px", md: "200px" }}
        // w="100px"
        width={{ base: "100px", lg: "300px", md: "200px", xl: "300px" }}
        height={{ base: "100px", lg: "300px", md: "200px", xl: "300px" }}
        onClick={onAddToCartHandler}
      >
        {product.title}
      </Box>
    </Center>
  );
};
