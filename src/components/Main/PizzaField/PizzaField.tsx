import React, { FC, useContext } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
import pizzasData from '../../../assets/PizzasData/pizzas.json'
import PizzaItem from './PizzaItem'
import Skeleton from '../../UI/Skeleton/Skeleton'
import { SearchContext } from '../../../App'
import { useAppSelector } from '../../../assets/ts/hooks'
import { selectIsLoading, selectPizzas } from '../../../assets/redux/slices/pizzasSlice'

const PizzaField: FC = (props) => {
  const { searchValue } = useContext(SearchContext)!;

  const pizzas = useAppSelector(selectPizzas);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas
              .filter((pizza) => {
                return pizza.name.toLowerCase().includes(searchValue.toLowerCase()); // True if includes, false if not
              }) // for static data
              .map((pizza) => (
                <PizzaItem
                  key={pizza.id}
                  id={pizza.id}
                  imageUrl={pizza.imageUrl}
                  name={pizza.name}
                  types={pizza.types}
                  sizes={pizza.sizes}
                  prices={pizza.prices} />
              ))
        }
      </div>
    </section>
  );
};

export default PizzaField;