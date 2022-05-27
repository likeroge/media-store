import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IProduct } from "../../types/redux.types";

const initialState: IOrder = {
  firstName: "",
  lastName: "",
  phoneNumber: 0,
  address: "",
  paymentInfo: "",
  products: [],
  totalPrice: 0,
};

interface IOrderPayload {
  type:
    | "firstName"
    | "lastName"
    | "phoneNumber"
    | "address"
    | "paymentInfo"
    | "products"
    | "totalPrice";
  value: string | number | IProduct[];
}

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setOrderState(state: IOrder, action: PayloadAction<IOrderPayload>) {
      let type: keyof IOrder = action.payload.type;
      state[type] = action.payload.value;
    },
  },
});

export const { setOrderState } = orderSlice.actions;

export default orderSlice.reducer;
