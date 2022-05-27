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
          <Text>CHIP</Text>
          <Text>SYSTEM</Text>
        </HStack>
        <HStack justifyContent={"center"}>
          <Text>{cardNum}</Text>
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
