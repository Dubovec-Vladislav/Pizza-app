import React, { FC, useEffect } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
// import pizzasData from '../../../assets/PizzasData/pizzas.json'
import PizzaItem from './PizzaItem'
import Skeleton from '../../UI/Skeleton/Skeleton'

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
}

interface PizzaFieldProps {
  items: Pizza[],
  setItems: (items: Pizza[]) => void,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
}

const PizzaField: FC<PizzaFieldProps> = ({ items, setItems, isLoading, setIsLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://64ca3494b2980cec85c315c6.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })
  }, [setItems, setIsLoading]);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((pizza) => (
              <PizzaItem
                key={pizza.id}
                imageUrl={pizza.imageUrl}
                name={pizza.name}
                types={pizza.types}
                sizes={pizza.sizes}
                price={pizza.price} />
            ))
        }
      </div>
    </section>
  );
};

export default PizzaField;