import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";
import { setOrderState } from "../../../store/slices/orderSlice";
import { CustomButton } from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";

export const CustomerInfo = () => {
  const order = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const navigate = useNavigate();

  return (
    <VStack spacing={5}>
      <Input
        // value={firstName}
        // onChange={(e) => setFirstName(e.target.value)}
        variant="outline"
        placeholder="Имя"
        onBlur={(e) =>
          dispatch(setOrderState({ type: "firstName", value: e.target.value }))
        }
      />
      <Input
        // value={lastName}
        // onChange={(e) => setLastName(e.target.value)}
        variant="outline"
        placeholder="Фамилия"
        onBlur={(e) =>
          dispatch(setOrderState({ type: "lastName", value: e.target.value }))
        }
      />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<PhoneIcon color="gray.300" />}
        />
        <Input
          // value={phoneNumber}
          // onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Телефон"
          onBlur={(e) =>
            dispatch(
              setOrderState({ type: "phoneNumber", value: e.target.value })
            )
          }
        />
      </InputGroup>

      <CustomButton
        onClick={() => navigate("/order/paymentinfo")}
        colorScheme="green"
      >
        Дальше
      </CustomButton>
    </VStack>
  );
};
