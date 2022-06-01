import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import cardBg from "../../../assets/images/creditCardBg.jpeg";

interface ICardData {
  fullName: string;
  cardNum: string;
  month: string;
  year: string;
  cvv: string;
}

export const CreditCard: FC<ICardData> = ({
  fullName,
  cardNum,
  cvv,
  month,
  year,
}) => {
  return (
    <Flex w={"100%"} h="100%" justifyContent={"center"}>
      <Box
        width={{ base: "100%", md: "60%" }}
        height={{ base: "150px", md: "200px" }}
        bgImage={cardBg}
        bgSize="cover"
        bgRepeat={"no-repeat"}
        display="flex"
        flexDir={"column"}
        justifyContent="space-between"
        p={2}
        textColor="white"
      >
        <HStack justifyContent={"space-between"}>
          <Text></Text>
          <Text fontWeight={"bold"}>CARD</Text>
        </HStack>
        <HStack justifyContent={"center"}>
          <Text>{cardNum.slice(0, 4)}</Text>
          <Text>{cardNum.slice(4, 8)}</Text>
          <Text>{cardNum.slice(8, 12)}</Text>
          <Text>{cardNum.slice(12, 16)}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text>{fullName}</Text>
          <Text>
            {month}/{year}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};
