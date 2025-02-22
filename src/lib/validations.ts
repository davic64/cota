import { Product } from "@/types/quotation.types";

export const validateProducts = (products: Product[]) => {
  return products.every((product) => {
    const isNameValid = product.name.trim() !== "";

    const isQuantityValid = product.quantity !== 0;
    const isPriceValid = product.price !== 0;

    return isNameValid && isQuantityValid && isPriceValid;
  });
};
