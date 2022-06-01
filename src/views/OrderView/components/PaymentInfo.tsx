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
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton";
import { CreditCard } from "./CreditCard";

export const PaymentInfo = () => {
  const [cardNum, setCardNum] = useState("0000000000000000");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState("01");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("Ivan Ivanov");

  let currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const isPaymentDataValid = (): boolean => {
    if (cardNum.length === 16 && fullName.length > 1 && cvv.length === 3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack direction={"column"}>
      <CreditCard
        fullName={fullName}
        cardNum={cardNum}
        year={year}
        month={month}
        cvv={"222"}
      />
      <Input
        placeholder="Номер карты"
        type={"number"}
        onChange={(e) => setCardNum(e.target.value.slice(0, 16))}
        value={cardNum.slice(0, 16)}
      />
      <Input
        placeholder="Держатель карты"
        type={"text"}
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <Stack pt={5} direction={{ base: "column", md: "row" }}>
        <Select
          placeholder="месяц"
          onChange={(e) => setMonth(e.target.value || "01")}
        >
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
        <Select
          placeholder="год"
          onChange={(e) =>
            setYear(e.target.value || new Date().getFullYear().toString())
          }
        >
          {[...Array(10)]
            .map((el, idx) => currentYear + idx)
            .map((year) => (
              <option value={year.toString()} key={year}>
                {year}
              </option>
            ))}
        </Select>
        <Input
          type={"number"}
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </Stack>
      <Center pt={{ base: 5, md: 10 }}>
        <CustomButton
          disabled={!isPaymentDataValid()}
          onClick={() => navigate("/order/address")}
          colorScheme="green"
        >
          Дальше
        </CustomButton>
      </Center>
    </Stack>
  );
};
