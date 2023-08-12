import { Pizza } from "../ts/interfacePizza"

export const calcTotalAmount = (pizzas: Pizza[]) => {
  return pizzas.reduce((sum, pizza) => sum + pizza.numberOfPizzas, 0);
};