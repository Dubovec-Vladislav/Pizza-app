import { Pizza } from "../ts/interfacePizza"

export const calcTotalPrice = (pizzas: Pizza[]) => {
  return pizzas.reduce((sum, pizza) => sum + pizza.price * pizza.numberOfPizzas, 0)
}