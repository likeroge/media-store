import {
  Box,
  Center,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomButton } from "../../../components/CustomButton";
import { CreditCard } from "./CreditCard";

export const PaymentInfo = () => {
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("01");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("Ivan Ivanov");

  return (
    <Stack direction={"column"}>
      <CreditCard
        fullName={fullName}
        cardNum={cardNum}
        year={"2020"}
        month={month}
        cvv={"222"}
      />
      <Input
        placeholder="Номер карты"
        type={"number"}
        onChange={(e) => setCardNum(e.target.value)}
        value={cardNum}
      />
      <Input
        placeholder="Держатель карты"
        type={"text"}
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <Stack pt={5} direction={{ base: "column", md: "row" }}>
        <Select placeholder="месяц" onChange={(e) => setMonth(e.target.value)}>
          <option value="01">январь</option>
          <option value="02">февраль</option>
          <option value="03">март</option>
          <option value="04">апрель</option>
          <option value="05">май</option>
          <option value="06">июнь</option>
          <option value="07">июль</option>
          <option value="08">август</option>
          <option value="09">сентябрь</option>
          <option value="10">октябрь</option>
          <option value="11">ноябрь</option>
          <option value="12">декабрь</option>
        </Select>
        <Select placeholder="год">
          <option value="option1">2022</option>
          <option value="option2">2023</option>
          <option value="option3">2024</option>
          <option value="option4">2025 </option>
        </Select>
        <Input type={"number"} placeholder="CVV" />
      </Stack>
      <Center pt={{ base: 5, md: 10 }}>
        <CustomButton
          // onClick={() => navigate("/order/paymentinfo")}
          colorScheme="green"
        >
          Дальше
        </CustomButton>
      </Center>
    </Stack>
  );
};
