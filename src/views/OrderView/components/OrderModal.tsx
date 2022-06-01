import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";
import { removeAllItemsFromCart } from "../../../store/slices/cartSlice";

export const OrderModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  address: { lat: number; lng: number };
}> = ({ isOpen, onClose, address }) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onButtonClickHandler = () => {
    dispatch(removeAllItemsFromCart());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "95%" }}>
        <ModalHeader>Спасибо за заказ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box h={"10rem"} overflow="scroll">
            {cart.products.map((product) => (
              <HStack justify={"space-between"} key={product.id}>
                <Text>{product.title}</Text>
                <Text>{product.price} ₽</Text>
              </HStack>
            ))}
            <Divider />

            <Heading mt={5} size="sm">
              Адрес доставки:
            </Heading>
            <Text>Координаты:</Text>
            <Text>
              {address.lat.toFixed(2)}{" "}
              {+address.lat.toFixed(2) > 0 ? " с.ш." : "ю.ш."}
            </Text>
            <Text>
              {address.lng.toFixed(2)}{" "}
              {+address.lng.toFixed(2) > 0 ? " в.д." : "з.д."}
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Center width={"full"}>
            <Button colorScheme="green" mr={3} onClick={onButtonClickHandler}>
              Завершить
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
