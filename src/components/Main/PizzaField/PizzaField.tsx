import React, { FC, useEffect, useState } from 'react'
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

const PizzaField: FC = (props) => {
  let [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64ca3494b2980cec85c315c6.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false);
      })
  }, []);

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