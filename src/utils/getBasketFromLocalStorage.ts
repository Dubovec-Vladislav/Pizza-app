import { calcTotalAmount } from "./calcTotalAmount"
import { calcTotalPrice } from "./calcTotalPrice"

export const getBasketFromLocalStorage = () => {
  const data = localStorage.getItem('basket');
  const pizzas = data ? JSON.parse(data) : [];

  const totalPrice = calcTotalPrice(pizzas);
  const totalNumber = calcTotalAmount(pizzas);

  return {
    pizzas,
    totalPrice,
    totalNumber,
  };
};