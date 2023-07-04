import { Product } from "../types";



export const getProducts = async (): Promise<Product[]> => {
  const x = await fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => data);

  return x;
};
