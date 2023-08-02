import React, { FC } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
import pizzasData from '../../../assets/PizzasData/pizzas.json'
import PizzaItem from './PizzaItem'

const PizzaField: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          pizzasData.pizzas.map((pizza) => (
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