export interface PizzaFromApi {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  prices: number[];
};

export interface Pizza {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
  numberOfPizzas: number;
};