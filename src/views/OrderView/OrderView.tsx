import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

export const OrderView = () => {
  return (
    <Box px={{ md: 30, lg: 40, xl: 80 }} pb={{ base: 28 }}>
      <Heading size={"md"} mb={5}>
        Оформление заказа
      </Heading>
      <Outlet />
    </Box>
  );
};
