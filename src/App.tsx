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
import { Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { CustomerInfo } from "./views/OrderView/components/CustomerInfo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { useAppDispatch, useAppSelector } from "./hooks/redux.hooks";
import { addToCart } from "./store/slices/cartSlice";
import { OrderView } from "./views/OrderView/OrderView";
import { PaymentInfo } from "./views/OrderView/components/PaymentInfo";
import { Address } from "./views/OrderView/components/Address";

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
      <Container pt={20} height={{ base: "90%", md: "90%" }} maxW="80%">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          {/* <Route path="/" element={<PaymentInfo />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route
            path="order"
            element={
              cart.products.length > 0 ? <OrderView /> : <Navigate to="/" />
            }
          >
            <Route path="userinfo" element={<CustomerInfo />} />
            <Route path="paymentinfo" element={<PaymentInfo />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
};
