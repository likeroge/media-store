interface ICart {
  products: IProduct[];
  totalPrice: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  category: "books" | "electronics" | "clothes";
}
