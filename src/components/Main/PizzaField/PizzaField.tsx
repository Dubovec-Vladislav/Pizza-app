import React, { FC } from 'react'
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
  isLoading: boolean,
  searchValue: string,
}

const PizzaField: FC<PizzaFieldProps> = ({ items, isLoading, searchValue }) => {
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items
              .filter((pizza) => {
                return pizza.name.toLowerCase().includes(searchValue.toLowerCase()); // True if includes, false if not
              }) // for static data
              .map((pizza) => (
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