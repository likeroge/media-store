import {
  Box,
  Center,
  HStack,
  Link,
  LinkBox,
  Tab,
  TabList,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { BiStore } from "react-icons/bi";
import { BsCart, BsCartFill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/redux.hooks";

export const Header = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);

  return (
    <HStack
      px={5}
      bg={"gray.100"}
      h="10%"
      position={"fixed"}
      w="100vw"
      justifyContent={"space-between"}
      zIndex={100}
    >
      <Box onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <Center>
          <Icon as={BiStore} w={8} h={8} color="green.500" />
          <Text fontSize={"xl"} fontWeight="semibold">
            Media
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"green.500"}>
            Store
          </Text>
        </Center>
      </Box>

      <Box display={{ base: "none", lg: "block" }}>
        <Link as={ReactRouterLink} to="cart">
          {cart.products.length === 0 ? (
            <Icon color={"gray.400"} as={BsCart} w={7} h={7} />
          ) : (
            <Center>
              <Tag
                size={"15"}
                borderRadius="full"
                variant="subtle"
                colorScheme="gray"
              >
                <TagLabel fontWeight={"bold"}>{cart.products.length}</TagLabel>
              </Tag>
              <Icon color={"green.500"} as={BsCartFill} w={7} h={7} />
            </Center>
          )}
        </Link>
      </Box>
    </HStack>
  );
};
