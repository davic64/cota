import { Product } from "@/types/quotation.types";

export const getTotal = (products: Product[]) => {
  const totalGeneral = products.reduce((acc, product) => {
    const totalProducto =
      product.quantity * product.price * (1 - product.discount / 100);
    return acc + totalProducto;
  }, 0);
  return totalGeneral;
};
