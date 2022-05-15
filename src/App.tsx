import {
  Box,
  Button,
  Container,
  Heading,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { useAppDispatch, useAppSelector } from "./hooks/redux.hooks";
import { addToCart } from "./store/slices/cartSlice";

export const App = () => {
  const cart = useAppSelector((state) => state.cart);
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  console.log(cart);
  // console.log(products);
  // display="flex" flexFlow={"column"}
  return (
    <Box h="100vh">
      <Header />
      <Container pt={20} h={"90%"} maxW="80%">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="order" element={<Box>ORDER</Box>} /> */}
          {/* <Route path="/cart" element={<App />} /> */}
          {/* <Route path="order" element={<App />} /> */}
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
};
