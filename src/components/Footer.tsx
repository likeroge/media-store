import {
  Box,
  Center,
  HStack,
  Icon,
  Link,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";
import { BsCart, BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hooks";

export const Footer = () => {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <HStack
      bg={"gray.100"}
      h="10%"
      position={"fixed"}
      w="100vw"
      justify={"space-between"}
      align="center"
      display={{ base: "flex", lg: "none" }}
      px={4}
    >
      <Box onClick={() => navigate("")} _active={{ transform: "scale(0.9)" }}>
        <Icon as={GiHamburgerMenu} w={7} h={7} />
      </Box>
      <Box>
        <Link as={ReactRouterLink} to="cart">
          {cart.products.length === 0 ? (
            <Icon
              color={"gray.400"}
              as={BsCart}
              w={7}
              h={7}
              _active={{ transform: "scale(0.9)" }}
            />
          ) : (
            <>
              <Tag
                size={"15"}
                borderRadius="full"
                variant="subtle"
                colorScheme="gray"
              >
                <TagLabel fontWeight={"bold"}>{cart.products.length}</TagLabel>
              </Tag>
              <Icon
                color={"green.500"}
                as={BsCartFill}
                w={7}
                h={7}
                _active={{ transform: "scale(0.9)" }}
              />
            </>
          )}
        </Link>
      </Box>
    </HStack>
  );
};
