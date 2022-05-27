export interface ICart {
  products: IProduct[];
  totalPrice: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  category: "books" | "electronics" | "clothes";
}

export interface IOrder {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  products: IProduct[];
  totalPrice: number;
  address: string;
  paymentInfo: string;
  [key: string]: string | number | IProduct[];
}
